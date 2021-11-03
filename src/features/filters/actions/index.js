import axios from 'axios';

const SET_FILTERS = 'SET_FILTERS';
const SET_FILTERS_ERROR = 'SET_FILTERS_ERROR';
const CHANGE_CATEGORY_FILTER = 'CHANGE_CATEGORY_FILTER';
const CHANGE_BRAND_FILTER = 'CHANGE_BRAND_FILTER';
const RESET_ALL_FILTERS = 'RESET_ALL_FILTERS';
const CHANGE_RANGE = 'CHANGE_RANGE';
const CHANGE_SEARCH = 'CHANGE_SEARCH';

function actionSetFiltersSuccess(payload) {
  return { type: SET_FILTERS, payload };
}

function actionSetFiltersError(payload) {
  return { type: SET_FILTERS_ERROR, payload };
}

function actionSetFilters() {
  return dispatch => {
    const filters = { categories: [], brands: [] };
    function getCategories() {
      return axios.get('http://localhost:3001/categories')
        .then(res => {
          const completedData = res.data.map(item => ({
            title: item,
            checked: false
          }));
          return completedData;
        })
    }
    function getBrands() {
      return axios.get('http://localhost:3001/brands')
        .then(res => {
          const completedData = res.data.map(item => ({
            title: item,
            checked: false
          }));
          return completedData;
        })
    }
    Promise.all([getCategories(), getBrands()])
      .then(values => {
        filters.categories = values[0];
        filters.brands = values[1];
        dispatch(actionSetFiltersSuccess(filters));
      })
      .catch(error => dispatch(actionSetFiltersError(error.message)));
  }
}

function actionChangeCategoryFilter(payload) {
  return { type: 'CHANGE_CATEGORY_FILTER', payload };
}

function actionChangeBrandFilter(payload) {
  return { type: 'CHANGE_BRAND_FILTER', payload };
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
  SET_FILTERS,
  SET_FILTERS_ERROR,
  CHANGE_CATEGORY_FILTER,
  CHANGE_BRAND_FILTER,
  RESET_ALL_FILTERS,
  CHANGE_RANGE,
  CHANGE_SEARCH,
  actionSetFilters,
  actionChangeCategoryFilter,
  actionChangeBrandFilter,
  actionResetAllFilters,
  actionChangeRange,
  actionChangeSearch
};