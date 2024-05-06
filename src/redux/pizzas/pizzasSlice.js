import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./operations";

const pizzasSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzas: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzas = [...state.pizzas, ...action.payload.pizzas];
    });

    //   .addMatcher(isAnyOf(fetchAdverts.pending, fetchMakes.pending), state => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
  },
});

export const pizzasReducer = pizzasSlice.reducer;
