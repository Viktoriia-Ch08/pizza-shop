import { createAsyncThunk } from '@reduxjs/toolkit';
import { readData } from '../../services/dataServices';

export const fetchInfo = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (_, thunkAPI) => {
    try {
      const response = await readData();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
