import { createReducer } from '@reduxjs/toolkit';
import cartActions from './cart-actions';

const cart = createReducer([], {
  [cartActions.addToCart]: (state, { payload }) => {
    const existBook = state.find((book) => book.bookId === payload.bookId);
    if (existBook) {
      existBook.count += payload.count;
      return state;
    }
    return [...state, payload];
  },
});
export default cart;
