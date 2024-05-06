import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    order: [],
    confirmedOrders: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getOrders(state, action) {
      action.payload
        ? state.confirmedOrders.push(action.payload)
        : (state.confirmedOrders = []);
    },
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
    // builder.addCase(fetchPizzas.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.pizzas = [...state.pizzas, ...action.payload.pizzas];
    //   state.confirmedOrders.length
    //     ? (state.confirmedOrders = [
    //         ...state.confirmedOrders,
    //         ...action.payload.confirmedOrders,
    //       ])
    //     : [action.payload.confirmedOrders];
    // });
    //   .addMatcher(isAnyOf(fetchAdverts.pending, fetchMakes.pending), state => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
  },
});

export const ordersReducer = ordersSlice.reducer;
export const {
  getOrders,
  addOrder,
  deleteFromOrder,
  changeQuantity,
  clearOrder,
  addToConfirmedOrders,
} = ordersSlice.actions;
