import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import booksOperations from './books-operations';
import booksActions from './books-actions';

const authInitialState = {
  userName: '',
  avatar: '',
  token: '',
  isLoggedIn: false,
};

const authorization = createReducer(authInitialState, {
  [booksOperations.logIn.fulfilled]: (_, { payload }) => ({
    userName: payload.username,
    avatar: payload.avatar,
    token: payload.token,
    isLoggedIn: true,
  }),
});

const books = createReducer([], {
  [booksOperations.getBooks.fulfilled]: (_, { payload }) => [...payload],
});

const bookDetails = createReducer(
  {},
  {
    [booksOperations.getBookById.fulfilled]: (_, { payload }) => payload,
  },
);

const filter = createReducer('', {
  [booksActions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [booksOperations.logIn.pending]: () => true,
  [booksOperations.getBooks.pending]: () => true,
  [booksOperations.getBookById.pending]: () => true,
  [booksOperations.logIn.fulfilled]: () => false,
  [booksOperations.getBooks.fulfilled]: () => false,
  [booksOperations.getBookById.fulfilled]: () => false,
  [booksOperations.logIn.rejected]: () => false,
  [booksOperations.getBooks.rejected]: () => false,
  [booksOperations.getBookById.rejected]: () => false,
});

const error = createReducer(null, {
  [booksOperations.logIn.rejected]: (_, { payload }) => payload,
  [booksOperations.logIn.pending]: () => null,
  [booksOperations.getBooks.rejected]: (_, { payload }) => payload,
  [booksOperations.getBooks.pending]: () => null,
  [booksOperations.getBookById.rejected]: (_, { payload }) => payload,
  [booksOperations.getBookById.pending]: () => null,
});

export default combineReducers({
  authorization,
  books,
  isLoading,
  bookDetails,
  error,
  filter,
});
