export const selectProducts = productsType => state => {
  switch (productsType) {
    case 'wishlist':
      return state.products.filter(product => product.inWishlist);
    case 'cart':
      return state.products.filter(product => product.quantity);
    default:
      return state.products;
  }
}

export const selectWishfulProductsCount = state =>
  state.products.filter(product => product.inWishlist).length;

export const selectPurchaseProductsCount = state =>
  state.products.reduce((sum, product) => (sum + product.quantity), 0);