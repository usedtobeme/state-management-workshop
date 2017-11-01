import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { offline } from 'redux-offline';
import defaultConfig from 'redux-offline/lib/defaults';
import rootReducer from './reducers';
import rootEpic from './epics';


const offlineConfig = {
  ...defaultConfig,
  effect: (effect, action) => {
    console.log({effect, action})
  }
}

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  const store = createStore(
    rootReducer, /* preloadedState, */
    compose(
      applyMiddleware(epicMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      offline(offlineConfig),      
    )
  );
  return store;
};