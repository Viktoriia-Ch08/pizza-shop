import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchData,
  fetchLimitedPizzasData,
  fetchNextPizzasCards,
} from "../../services/dataServices";

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

export const fetchLimitedPizzas = createAsyncThunk(
  "pizzas/fetchLimitedPizzas",
  async (_, thunkAPI) => {
    try {
      const response = await fetchLimitedPizzasData();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchNextPizzas = createAsyncThunk(
  "pizzas/fetchNextPizzas",
  async (_, thunkAPI) => {
    try {
      const response = await fetchNextPizzasCards();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
