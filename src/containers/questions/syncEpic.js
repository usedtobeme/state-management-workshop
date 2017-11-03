import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { getQuestions } from './actions';
import * as types from './actionTypes';
import firebase from './../../firebase';

const syncQuestionsEpic = action$ => {
  return action$.ofType(types.SYNC_QUESTIONS)
    .mergeMap(action => 
      Observable.fromEvent(firebase.database.ref(), 'value')
        .map(
          snapshot => getQuestions(snapshot.val().questions)
        )
      )
}


export default syncQuestionsEpic;
