import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../services/dataServices";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (_, thunkAPI) => {
    try {
      const response = await fetchData();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
