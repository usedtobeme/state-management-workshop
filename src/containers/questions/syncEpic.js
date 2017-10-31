import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { getQuestions } from './actions';
import * as types from './actionTypes';
import database from '../../firebase';

const syncQuestionsEpic = action$ =>
  action$.ofType(types.SYNC_QUESTIONS)
    .map(action => {
      console.log(action)
    });

export default syncQuestionsEpic;
