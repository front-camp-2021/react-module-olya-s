import axios from 'axios';

const GET_PRODUCT = 'GET_PRODUCT';
const GET_PRODUCTS = 'GET_PRODUCTS';
const CHANGE_WISHLIST_STATUS = 'CHANGE_WISHLIST_STATUS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_WISHLIST = 'CLEAR_WISHLIST';
const CLEAR_CART = 'CLEAR_CART';
// const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

function actionGetProductSuccess(payload) {
  return { type: GET_PRODUCT, payload };
}

function actionGetProduct(productId) {
  return dispatch => {
    axios.get(`http://localhost:3001/products/${productId}`)
      .then(res => {
        const completedData = {
          ...res.data,
          inWishlist: false,
          quantity: 0
        };
        dispatch(actionGetProductSuccess(completedData));
      })
  }
}

function actionGetProductsSuccess(payload) {
  return { type: GET_PRODUCTS, payload };
}

function actionGetProducts() {
  return dispatch => {
    axios.get(`http://localhost:3001/products`)
      .then(res => {
        const completedData = res.data.map(item => ({
          ...item,
          inWishlist: false,
          quantity: 0
        }));
        dispatch(actionGetProductsSuccess(completedData));
      });
  }
}

function actionChangeWishlistStatus(payload) {
  return { type: CHANGE_WISHLIST_STATUS, payload };
}

function actionAddToCart(payload) {
  return { type: ADD_TO_CART, payload };
}

function actionRemoveFromCart(payload) {
  return { type: REMOVE_FROM_CART, payload };
}

function actionClearWishlist() {
  return { type: CLEAR_WISHLIST };
}

function actionClearCart() {
  return { type: CLEAR_CART };
}

// function actionFilterProducts(payload) {
//   return { type: FILTER_PRODUCTS, payload };
// }

export {
  GET_PRODUCT,
  GET_PRODUCTS,
  CHANGE_WISHLIST_STATUS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_WISHLIST,
  CLEAR_CART,
  // FILTER_PRODUCTS,
  actionGetProduct,
  actionGetProducts,
  actionChangeWishlistStatus,
  actionAddToCart,
  actionRemoveFromCart,
  actionClearWishlist,
  actionClearCart,
  // actionFilterProducts
};