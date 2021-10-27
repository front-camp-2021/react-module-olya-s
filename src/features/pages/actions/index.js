const SET_TOTAL_PAGES = 'TOTAL_PAGES';
const CHANGE_PAGE = 'CHANGE_PAGE';

function actionSetTotalPages(payload) {
  return { type: SET_TOTAL_PAGES, payload }
}

function actionChangePage(payload) {
  return { type: CHANGE_PAGE, payload }
}

export { SET_TOTAL_PAGES, CHANGE_PAGE, actionSetTotalPages, actionChangePage };