import { combineEpics } from 'redux-observable';
import sync from './containers/questions/syncEpic';
import add from './containers/questions/addQuestionEpic';

const rootEpic = combineEpics(
  sync,
  add
);

export default rootEpic;
