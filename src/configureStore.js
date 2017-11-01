import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  const store = createStore(
    rootReducer, /* preloadedState, */
    compose(
      applyMiddleware(epicMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};