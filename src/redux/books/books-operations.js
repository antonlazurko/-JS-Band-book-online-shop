import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import booksServices from '../../services/services';
import selectors from './selectors';

const logIn = createAsyncThunk(
  'auth/login',
  async (userName, { rejectWithValue }) => {
    try {
      return await booksServices.userLogin(userName);
    } catch {
      return rejectWithValue();
    }
  },
);

const getBooks = createAsyncThunk(
  'books/getBooks',
  async (token, { rejectWithValue }) => {
    try {
      // const token = useSelector(selectors.getTokenSelector);
      // console.log('books');
      return await booksServices.getBooks(token);
    } catch {
      return rejectWithValue();
    }
  },
);

const getBookById = createAsyncThunk(
  'books/getBookById',
  async (id, { rejectWithValue }) => {
    try {
      const token = useSelector(selectors.getTokenSelector);
      return await booksServices.getBookById(id, token);
    } catch {
      return rejectWithValue();
    }
  },
);

export default { logIn, getBooks, getBookById };
