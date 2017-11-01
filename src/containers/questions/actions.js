import * as types from './actionTypes';

export function syncQuestions() {
  return {
    type: types.SYNC_QUESTIONS
  }
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
    question,
    meta: {
      offline: {
        effect: {
          path: 'questions',
          type: 'push',
          item: question
        }
      }
    }
  }
}

export function updateItem(update) {
  return {
    type: types.UPDATE_ITEM,
    update
  }
}
