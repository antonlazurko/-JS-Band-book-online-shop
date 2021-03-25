import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import { booksReducers } from './books';
import { cartReducers } from './cart';

const { cart, cartModalReducer } = cartReducers;
const {
  authorization,
  books,
  isLoading,
  bookDetails,
  error,
  filter,
} = booksReducers;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['authorization'],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: persistReducer(
    authPersistConfig,
    combineReducers({
      authorization,
      books,
      isLoading,
      bookDetails,
      error,
      filter,
      cart,
      cartModalReducer,
    }),
  ),
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);
export default { persistor, store };
