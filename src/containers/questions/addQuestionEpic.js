import 'rxjs';
import { Observable } from 'rxjs/Observable';
import * as types from './actionTypes';
import firebase from './../../firebase';

const syncQuestionsEpic = action$ =>
  action$.ofType(types.ADD_NEW_QUESTION)
    .mergeMap(action => 
      Observable.fromPromise(
        firebase.database
          .ref('questions')
          .push(action.question)
      ).map(response => ({
          type: 'BOGUS_UPDATE'
        }))
    )

export default syncQuestionsEpic;
