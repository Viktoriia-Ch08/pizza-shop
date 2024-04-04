import { configureStore } from "@reduxjs/toolkit";
import { pizzasReducer } from "./pizzasSlice";

export const store = configureStore({
  reducer: {
    data: pizzasReducer,
  },
});
