import * as types from './actionTypes';

const initialState = {
  questions: [],
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEW_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.question]
      }
    default:
      return state;
  }
};