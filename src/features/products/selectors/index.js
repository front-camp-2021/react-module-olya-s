export const selectProducts = state => state.products;

export const selectWishfulProductsCount = state =>
  state.products.filter(product => product.inWishlist).length;