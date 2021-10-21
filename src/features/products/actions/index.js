const CHANGE_WISHLIST_STATUS = 'CHANGE_WISHLIST_STATUS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_WISHLIST = 'CLEAR_WISHLIST';
const CLEAR_CART = 'CLEAR_CART';

function actionChangeWishlistStatus(payload) {
  return { type: 'CHANGE_WISHLIST_STATUS', payload };
}

function actionAddToCart(payload) {
  return { type: 'ADD_TO_CART', payload };
}

function actionRemoveFromCart(payload) {
  return { type: 'REMOVE_FROM_CART', payload };
}

function actionClearWishlist() {
  return { type: 'CLEAR_WISHLIST' };
}

function actionClearCart() {
  return { type: 'CLEAR_CART' };
}

export {
  CHANGE_WISHLIST_STATUS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_WISHLIST,
  CLEAR_CART,
  actionChangeWishlistStatus,
  actionAddToCart,
  actionRemoveFromCart,
  actionClearWishlist,
  actionClearCart
};