import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reduxState from '../redux/reducers';

const loggerMiddleware = createLogger();

export default function createReduxStore({ preloadedState, server } = {}) {
  let enhancer;

  if (process.env.NODE_ENV !== 'production' && !server) {
    const withReduxDevtools = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    enhancer = withReduxDevtools(applyMiddleware(thunkMiddleware, loggerMiddleware));
  } else {
    enhancer = applyMiddleware(thunkMiddleware);
  }

  return createStore(reduxState, preloadedState, enhancer);
}
