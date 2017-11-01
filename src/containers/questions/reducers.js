import * as types from './actionTypes';

const initialState = {
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case types.UPDATE_ITEM:
      return {
        ...state, 
        [action.update.id]: action.update.item
      }
    default:
      return state;
  }
};
