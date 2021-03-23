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

import booksReducers from './books/books-reducers';

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
  reducer: persistReducer(authPersistConfig, booksReducers),
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);
export default { persistor, store };
