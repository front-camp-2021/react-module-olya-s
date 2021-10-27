import {
  SET_FILTERS,
  CHANGE_CATEGORY_FILTER,
  CHANGE_BRAND_FILTER,
  RESET_ALL_FILTERS,
  CHANGE_RANGE,
  CHANGE_SEARCH
} from '../actions';

// const categoryFilterConfig = [
//   {
//     value: 'category=cell_phones',
//     title: 'Cell Phones',
//     checked: false
//   },
//   {
//     value: 'category=computer_tablets',
//     title: 'Computers & Tablets',
//     checked: false
//   },
//   {
//     value: 'category=cell_phones_accessories',
//     title: 'Cell Phone Accessories',
//     checked: false
//   },
//   {
//     value: 'category=appliances',
//     title: 'Appliances',
//     checked: false
//   },
//   {
//     value: 'category=audio',
//     title: 'Audio',
//     checked: false
//   }
// ];

// const brandFilterConfig = [
//   {
//     value: 'brand=insigni',
//     title: 'Insigni',
//     checked: false
//   },
//   {
//     value: 'brand=samsung',
//     title: 'Samsung',
//     checked: false
//   },
//   {
//     value: 'brand=apple',
//     title: 'Apple',
//     checked: false
//   }
// ];

const doubleSlider = {
  min: 100,
  max: 200,
  title: 'Price',
  selected: {
    from: 100,
    to: 200
  }
};

const filtersInitialState = {
  filters: {
    categories: [],
    brands: []
  },
  range: { ...doubleSlider, reset: false },
  search: ''
};

export function filters(state = filtersInitialState, action) {
  switch (action.type) {
    case SET_FILTERS:
      return { ...state, filters: action.payload };
    case CHANGE_CATEGORY_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: state.filters.categories.map(filter => {
            return filter.title === action.payload
              ? { ...filter, checked: !filter.checked }
              : filter
          })
        }
      };
    case CHANGE_BRAND_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          brands: state.filters.brands.map(filter =>
            filter.title === action.payload
              ? { ...filter, checked: !filter.checked }
              : filter)
        }
      };
    case RESET_ALL_FILTERS:
      return {
        ...state,
        range: {
          ...state.range, selected: { from: state.range.min, to: state.range.max }, reset: true
        },
        filters: {
          categories: state.filters.categories.map(filter => ({ ...filter, checked: false })),
          brands: state.filters.brands.map(filter => ({ ...filter, checked: false }))
        },
        search: ''
      };
    case CHANGE_RANGE:
      return {
        ...state,
        range: { ...state.range, selected: action.payload, reset: false }
      };
    case CHANGE_SEARCH:
      return {
        ...state,
        search: action.payload
      }
    default:
      return state;
  }
}