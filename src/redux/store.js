import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import booksReducers from './books/books-reducers';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: booksReducers,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export default { store };
