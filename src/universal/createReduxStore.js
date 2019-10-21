import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../redux/reducers';

const sagaMiddleware = createSagaMiddleware();

export default function createReduxStore({ preloadedState, server } = {}) {
  let enhancer;

  if (process.env.NODE_ENV !== 'production' && !server) {
    // Enable redux-logger and redux-devtools on dev environments for debugging each state steps
    const loggerMiddleware = createLogger();
    const withReduxDevtools = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    enhancer = withReduxDevtools(applyMiddleware(sagaMiddleware, loggerMiddleware));
  } else {
    enhancer = applyMiddleware(sagaMiddleware);
  }

  const store = createStore(rootReducer, preloadedState, enhancer);

  store.runSaga = sagaMiddleware.run;

  return store;
}
