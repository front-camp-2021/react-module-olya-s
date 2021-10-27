import { SET_TOTAL_PAGES, CHANGE_PAGE } from '../actions';

const pagesInitialState = {
  totalPages: 0,
  start: 1,
  currentPage: 1,
  viewPages: 9
}

export const pages = (state = pagesInitialState, action) => {
  switch (action.type) {
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case CHANGE_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}