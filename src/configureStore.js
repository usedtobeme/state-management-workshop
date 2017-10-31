import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import syncQuestionsEpic from './containers/questions/syncEpic';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware(syncQuestionsEpic);


const enhancers = [
  applyMiddleware(epicMiddleware)
]

export default function configureStore() {
  const store = createStore(
    rootReducer, /* preloadedState, */
    compose(
      ...enhancers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};