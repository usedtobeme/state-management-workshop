import * as types from './actionTypes';

export function syncQuestions() {
  return { type: types.SYNC_QUESTIONS}
}

export function getQuestions(questions) {
  return {
    type: types.GET_QUESTIONS,
    questions
  }
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
