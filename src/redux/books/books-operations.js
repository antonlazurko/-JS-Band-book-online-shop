import { createAsyncThunk } from '@reduxjs/toolkit';

import booksServices from '../../services/services';

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
      return await booksServices.getBooks(token);
    } catch {
      return rejectWithValue();
    }
  },
);

const getBookById = createAsyncThunk(
  'books/getBookById',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      return await booksServices.getBookById(id, token);
    } catch {
      return rejectWithValue();
    }
  },
);

export default { logIn, getBooks, getBookById };
