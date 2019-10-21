// Import babel-polyfill because this file uses "async/await"
import 'babel-polyfill';
import React from 'react';
import { Switch, Route } from 'react-router';
import queryString from 'query-string';
import App from '../containers/App';
import SearchBox from '../containers/SearchBox';
import SearchResults from '../containers/SearchResults';
import ProductDetail from '../containers/ProductDetail';
import ProductApi from '../redux/services/modules/product';

/**
* loadData is a function that preloads needed data for server-side rendering,
* is called in handleRender.js when server is started up and each component thats need
* required data to render must implement it!
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
    loadData: async (store, match) => {
      const data = await ProductApi.get(match.params.id);
      return Promise.resolve(
        store.dispatch({
          type: 'PRODUCT_GET_FETCHED',
          payload: {
            products: data.item
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
        <Route component={SearchBox} />
      </Switch>
    </App>
  );
}
