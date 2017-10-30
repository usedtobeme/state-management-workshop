import * as types from './actionTypes';

export default function addNewQuestion(question) {
  return {
    type: types.ADD_NEW_QUESTION,
    question
  }
}
