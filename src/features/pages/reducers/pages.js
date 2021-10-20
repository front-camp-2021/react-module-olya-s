import { CHANGE_PAGE } from '../actions';

const pagesInitialState = {
  totalPages: 20,
  start: 1,
  currentPage: 1,
  viewPages: 9
}

export const pages = (state = pagesInitialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}