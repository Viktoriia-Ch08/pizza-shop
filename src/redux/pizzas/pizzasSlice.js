import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchLimitedPizzas, fetchNextPizzas, fetchPizzas } from "./operations";

const pizzasSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzas: [],
    limitedPizzas: [],
    pizzaTypeFilter: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    setTypeFilterValue(state, action) {
      state.pizzaTypeFilter = action.payload;
    },
    filterPizzas(state, action) {
      state.limitedPizzas = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pizzas = [...action.payload.pizzas];
      })
      .addCase(fetchLimitedPizzas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.limitedPizzas = [...action.payload];
      })
      .addCase(fetchNextPizzas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.limitedPizzas = [...action.payload];
      })
      .addMatcher(
        isAnyOf(
          fetchPizzas.pending,
          fetchLimitedPizzas.pending,
          fetchNextPizzas.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchPizzas.rejected,
          fetchLimitedPizzas.rejected,
          fetchNextPizzas.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const pizzasReducer = pizzasSlice.reducer;
export const { setTypeFilterValue, filterPizzas } = pizzasSlice.actions;
