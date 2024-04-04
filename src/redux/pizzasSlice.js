import { createSlice } from "@reduxjs/toolkit";
import { fetchInfo } from "./operations";

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    pizzas: [],
    order: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addOrder(state, action) {
      state.order.unshift(action.payload);
    },
    deleteFromOrder(state, action) {
      state.order = state.order.filter(
        (pizza) => JSON.stringify(pizza) !== JSON.stringify(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzas = [...state.pizzas, ...action.payload.pizzas];
    });
    //   .addCase(fetchMakes.fulfilled, (state, action) => {
    //     state.makes = action.payload.sort((a, b) => a.localeCompare(b));
    //     state.isLoading = false;
    //   })

    //   .addMatcher(isAnyOf(fetchAdverts.pending, fetchMakes.pending), state => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
  },
});

export const pizzasReducer = pizzasSlice.reducer;
export const { addOrder, deleteFromOrder } = pizzasSlice.actions;
