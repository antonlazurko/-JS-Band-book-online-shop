import { createAction } from '@reduxjs/toolkit';

const addToCart = createAction('cart/addToCart');
const cartModalClose = createAction('cart/cartModalClose');

export default { addToCart, cartModalClose };
