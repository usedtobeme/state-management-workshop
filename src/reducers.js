import { combineReducers } from 'redux';
import questions from './containers/questions/reducers';

const rootReducer = combineReducers({
  questions
});

export default rootReducer;