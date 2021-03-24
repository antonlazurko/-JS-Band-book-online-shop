import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-unresolved
import services from 'services';

const purchaseOperation = createAsyncThunk(
  'cart/purchase',
  async ({ books, token }, { rejectWithValue }) => {
    try {
      return await services.purchase(books, token);
    } catch {
      return rejectWithValue();
    }
  },
);
export default { purchaseOperation };
