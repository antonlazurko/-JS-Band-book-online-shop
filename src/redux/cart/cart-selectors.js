const getCartInfo = (state) => state.cart.cart;
const getCartModal = (state) => state.cart.cartModalReducer;
export default { getCartInfo, getCartModal };
