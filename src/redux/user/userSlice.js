import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getUserData, loginThunk, registerThunk } from "../user/operations";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    preOrders: [],
    token: "",
    isAuth: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    logOut(state, _) {
      state.user = {};
      state.preOrders = [];
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
      state.preOrders
        ? state.preOrders.unshift(action.payload)
        : (state.preOrders = [action.payload]);
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
        state.user = {
          ...state.user,
          phoneNumber: action.payload.phoneNumber,
          displayName: action.payload.displayName,
        };
        state.preOrders = action.payload.preOrders;
      })
      .addMatcher(
        isAnyOf(registerThunk.pending, loginThunk.pending, getUserData.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          getUserData.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const userReducer = userSlice.reducer;
export const { logOut, updateUser, addToOrders } = userSlice.actions;
