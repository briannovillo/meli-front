import React from 'react';
import { matchPath } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import Router, { routes } from '../universal/routes';
import createReduxStore from '../universal/createReduxStore';
import renderFullPage from './renderFullPage';

export default function handleRender(req, res) {
  const promisesForSSR = [];

  // Create a new Redux store instance for every request
  const store = createReduxStore();

  // Use `some` to imitate `<Switch>` behavior of selecting only the first to match
  const matchedRoute = routes.some(
    (route) => {
      const match = matchPath(req.path, route);
      /**
       * If matched route has a loadData function,
       * put them in array of required promises before render page
       */
      if (match && route.loadData) promisesForSSR.push(route.loadData(store, req.url));
      return match;
    }
  );

  return Promise.all(promisesForSSR).then(
    () => {
      const html = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url}>
            <Router />
          </StaticRouter>
        </Provider>
      );

      // Get the preloaded state from the redux store for inject into initial html
      const preloadedState = store.getState();

      // Send a code based on whether the route matched or was not found
      return res
        .status(matchedRoute && matchedRoute.isExact ? 200 : 404)
        .send(renderFullPage(html, preloadedState));
    }
  );
}
