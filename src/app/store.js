import { createStore, combineReducers, applyMiddleware } from 'redux';
import { products } from '../features/products/reducers/products';
import { filters } from '../features/filters/reducers/filters';
import { pages } from '../features/pages/reducers/pages';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

export const store = createStore(
  combineReducers({
    products,
    filters,
    pages
  }),
  composeWithDevTools(applyMiddleware(thunk))
)