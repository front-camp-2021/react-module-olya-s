const CHANGE_FILTER = 'CHANGE_FILTER';
const RESET_ALL_FILTERS = 'RESET_ALL_FILTERS';
const CHANGE_RANGE = 'CHANGE_RANGE';
const CHANGE_SEARCH = 'CHANGE_SEARCH';

function actionChangeFilter(payload) {
  return { type: 'CHANGE_FILTER', payload };
}

function actionResetAllFilters() {
  return { type: 'RESET_ALL_FILTERS' };
}

function actionChangeRange(payload) {
  return { type: 'CHANGE_RANGE', payload };
}

function actionChangeSearch(payload) {
  return { type: 'CHANGE_SEARCH', payload }
}

export {
  CHANGE_FILTER,
  RESET_ALL_FILTERS,
  CHANGE_RANGE,
  CHANGE_SEARCH,
  actionChangeFilter,
  actionResetAllFilters,
  actionChangeRange,
  actionChangeSearch
};