import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchOrders } from "./operations";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    order: [],
    confirmedOrders: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addOrder(state, action) {
      state.order.unshift(action.payload);
    },
    addToConfirmedOrders(state, action) {
      state.confirmedOrders.unshift(action.payload);
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
    clearOrder(state) {
      state.order = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        action.payload.orders
          ? state.confirmedOrders.push(action.payload)
          : (state.confirmedOrders = []);
      })
      .addMatcher(isAnyOf(fetchOrders.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchOrders.rejected), (state) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
export const {
  addOrder,
  deleteFromOrder,
  changeQuantity,
  clearOrder,
  addToConfirmedOrders,
} = ordersSlice.actions;
