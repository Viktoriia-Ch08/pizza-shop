import { createSlice } from "@reduxjs/toolkit";
import { getUserData, loginThunk, registerThunk } from "../user/operations";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    orders: [],
    token: "",
    isAuth: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    logOut(state, _) {
      state.user = {};
      state.orders = [];
      state.token = "";
      state.isAuth = false;
    },
    updateUser(state, action) {
      state.user = {
        ...state.user,
        phoneNumber: action.payload.phoneNumber,
        displayName: action.payload.displayName,
      };
    },
    addToOrders(state, action) {
      state.orders
        ? state.orders.push(action.payload)
        : (state.orders = [action.payload]);
    },
    changePizzaQuantity(state, action) {
      state.user.userOrder[action.payload.index].quantity =
        action.payload.quantity;
      state.user.userOrder[action.payload.index].price = action.payload.price;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        const { email, accessToken, uid } = action.payload;
        state.user = { email, uid };
        state.token = accessToken;
        state.isLoading = false;
        state.isAuth = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        const { email, accessToken, uid } = action.payload;
        state.user = { email, uid };
        state.token = accessToken;
        state.isLoading = false;
        state.isAuth = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        debugger;
        state.user = {
          ...state.user,
          phoneNumber: action.payload.phoneNumber,
          displayName: action.payload.displayName,
        };
        state.orders = action.payload.orders;
      });
    // .addCase(updateOrderInfo.fulfilled, (state, action) => {
    //   state.user = {
    //     ...state.user,
    //     userOrder: action.payload,
    //   };
    // });
  },
});

export const userReducer = userSlice.reducer;
export const { logOut, updateUser, addToOrders, changePizzaQuantity } =
  userSlice.actions;
