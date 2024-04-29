import { createAsyncThunk } from "@reduxjs/toolkit";
import { readPizzasData } from "../../services/dataServices";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (_, thunkAPI) => {
    try {
      const response = await readPizzasData();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
