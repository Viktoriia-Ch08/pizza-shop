import { createSlice } from "@reduxjs/toolkit";
import { getUserData, loginThunk, registerThunk } from "../user/operations";
import { update } from "firebase/database";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    token: "",
    isAuth: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    logOut(state, _) {
      state.user = {};
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
      });
  },
});

export const userReducer = userSlice.reducer;
export const { logOut, updateUser } = userSlice.actions;
