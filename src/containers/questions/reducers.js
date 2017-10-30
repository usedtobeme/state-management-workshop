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
    case types.UPDATE_ITEM:
      return {
        ...state,
        questions: [...state.questions.map((item) => (
          item.id === action.item.id ? action.item : item
        ))]
      }
    default:
      return state;
  }
};
