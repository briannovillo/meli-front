import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../redux/reducers';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default function createReduxStore({ preloadedState, server } = {}) {
  let enhancer;

  if (process.env.NODE_ENV !== 'production' && !server) {
    const withReduxDevtools = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    enhancer = withReduxDevtools(applyMiddleware(sagaMiddleware, loggerMiddleware));
  } else {
    enhancer = applyMiddleware(sagaMiddleware);
  }

  const store = createStore(rootReducer, preloadedState, enhancer);

  store.runSaga = sagaMiddleware.run;

  store.close = () => {
    store.dispatch(END);
  };

  return store;
}
