import { createSlice } from "@reduxjs/toolkit";
import { fetchInfo } from "./operations";

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    pizzas: [],
    order: [],
    user: {},
    token: "",
    isAuth: false,
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
    setToken(state, action) {
      state.token = action.payload;
      state.isAuth = true;
    },
    logOut(state, _) {
      state.token = "";
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzas = [...state.pizzas, ...action.payload.pizzas];
    });
    // .addCase(registerThunk.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.token = action.payload.token;
    //   state.isLoading = false;
    //   state.isAuth = true;
    // });

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
export const { addOrder, deleteFromOrder, changeQuantity, setToken, logOut } =
  pizzasSlice.actions;
