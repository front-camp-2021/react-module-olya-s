const CHANGE_PAGE = 'CHANGE_PAGE';

function actionChangePage(payload) {
  return { type: CHANGE_PAGE, payload }
}

export { CHANGE_PAGE, actionChangePage };