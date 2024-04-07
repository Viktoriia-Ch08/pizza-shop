import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../user/operations";

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
      });
  },
});

export const userReducer = userSlice.reducer;
export const { logOut } = userSlice.actions;
