import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';
import SearchBox from '../containers/SearchBox';
import SearchResults from '../containers/SearchResults';
import NotFound from '../containers/NotFound';
import { search } from '../redux/actions/searchResults';

// for more details see https://reacttraining.com/react-router/web/guides/server-rendering
// specify routes with the asnyc function required to fetch the data to render the route
// IMPORTANT: the loadData function must return a Promise
export const routes = [
  {
    path: '/',
    exact: true,
    component: SearchBox,
  },
  {
    path: '/items',
    exact: false,
    component: SearchResults,
    loadData: () => search()
  },
  {
    component: NotFound
  }
];

export default function Router() {
  return (
    <App>
      <Switch>
        { routes.map(route => <Route key={route.path || 'notfound'} {...route} />) }
      </Switch>
    </App>
  );
}
