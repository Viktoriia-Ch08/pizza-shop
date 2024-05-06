import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { fetchUserData } from "../../services/dataServices";

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (uid, thunkAPI) => {
    try {
      const response = await fetchUserData(uid);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return response.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async (uid, thunkAPI) => {
    try {
      const userInfo = await fetchUserData(uid);
      return userInfo;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
