// Import babel-polyfill because this file uses "async/await" words
import 'babel-polyfill';
import React from 'react';
import { Switch, Route } from 'react-router';
import queryString from 'query-string';
import App from '../containers/App';
import SearchBox from '../containers/SearchBox';
import SearchResults from '../containers/SearchResults';
import ProductDetail from '../containers/ProductDetail';
import NotFound from '../containers/NotFound';
import ProductApi from '../redux/services/modules/product';

/**
* loadData is a function that preloads needed data for server-side rendering,
* is called in handleRender.js -> Promise.all() when server is started up,
* and each component thats need required data to render must implement it!
*
* Important: Remember that loadData must return a Promise for resolve in Promise.all
*
* For more info see:
*  https://reacttraining.com/react-router/web/guides/server-rendering
*/
export const routes = [
  {
    path: '/',
    exact: true,
    component: SearchBox,
  },
  {
    path: '/items',
    exact: true,
    component: SearchResults,
    loadData: async (store, url) => {
      const query = queryString.parseUrl(url).query.search;
      const data = await ProductApi.search(query);
      return Promise.resolve(
        store.dispatch({
          type: 'PRODUCT_SEARCH_FETCHED',
          payload: {
            products: data.items
          }
        })
      );
    }
  },
  {
    path: '/items/:id',
    exact: true,
    component: ProductDetail,
    loadData: async (store, url) => {
      const id = url.split('/').pop();
      const data = await ProductApi.get(id);
      return Promise.resolve(
        store.dispatch({
          type: 'PRODUCT_GET_FETCHED',
          payload: {
            product: data.item
          }
        })
      );
    }
  }
];

// If specified path don't match with routes, render SearchBox
export default function Router() {
  return (
    <App>
      <Switch>
        { routes.map(route => <Route key={route.path} {...route} />) }
        <Route component={NotFound} />
      </Switch>
    </App>
  );
}
