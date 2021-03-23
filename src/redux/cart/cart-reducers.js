// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import cartOperations from './cart-operations';
import cartActions from './cart-actions';

// const initialCartState = { books: [], totalPrice: 0 };
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
