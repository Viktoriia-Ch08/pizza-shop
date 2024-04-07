import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./operations";

const pizzasSlice = createSlice({
  name: "pizza",
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
    changeQuantity(state, action) {
      state.order[action.payload.index].quantity = action.payload.quantity;
      state.order[action.payload.index].price = action.payload.price;
    },
  },
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
export const { addOrder, deleteFromOrder, changeQuantity } =
  pizzasSlice.actions;
