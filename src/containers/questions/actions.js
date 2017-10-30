import * as types from './actionTypes';

export function getQuestions() {
  
}

export function addNewQuestion(question) {
  return {
    type: types.ADD_NEW_QUESTION,
    question
  }
}

export function updateItem(item) {
  return {
    type: types.UPDATE_ITEM,
    item
  }
}
