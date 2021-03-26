import { createReducer } from '@reduxjs/toolkit';

import cartActions from './cart-actions';
import cartOperations from './cart-operations';

const cart = createReducer([], {
  [cartActions.addToCart]: (state, { payload }) => {
    const existBook = state.find((book) => book.bookId === payload.bookId);
    if (existBook) {
      existBook.count += payload.count;
      return state;
    }
    return [...state, payload];
  },
  [cartOperations.purchaseOperation.fulfilled]: () => [],
});
const cartModalReducer = createReducer(false, {
  [cartOperations.purchaseOperation.fulfilled]: () => true,
  [cartActions.cartModalClose]: () => false,
});
export default { cart, cartModalReducer };
