import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-unresolved
import booksServices from 'services';

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
  async ({ bookId, token }, { rejectWithValue }) => {
    try {
      return await booksServices.getBookById(bookId, token);
    } catch {
      return rejectWithValue();
    }
  },
);

export default { logIn, getBooks, getBookById };
