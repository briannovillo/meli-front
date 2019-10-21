import React from 'react';
import { matchPath } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import Router, { routes } from '../universal/routes';
import createReduxStore from '../universal/createReduxStore';
import renderFullPage from './renderFullPage';

export default function handleRender(req, res) {
  const promises = [];

  // Create a new Redux store instance for every request
  const store = createReduxStore();

  let matchedRoute;
  // use `some` to imitate `<Switch>` behavior of selecting only the first to match
  routes.some((route) => {
    const match = matchPath(req.path, route);
    if (match) matchedRoute = match;
    if (match && route.loadData) promises.push(route.loadData(store, req.url));
    return matchedRoute;
  });

  return Promise.all(promises).then(
    () => {
      // This context object contains the results of the render
      const html = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={{}}>
            <Router />
          </StaticRouter>
        </Provider>
      );

      // get the preloaded state from the redux store
      const preloadedState = store.getState();

      // send a code based on whether the route matched or was not found
      return res
        .status(matchedRoute && matchedRoute.isExact ? 200 : 404)
        .send(renderFullPage(html, preloadedState));
    }
  );
}
