import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { pizzasReducer } from "./pizzas/pizzasSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/userSlice";

const pizzasPersistConfig = {
  key: "data",
  storage,
  whitelist: ["order"],
};

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token", "isAuth", "user"],
};

const rootReducer = combineReducers({
  data: persistReducer(pizzasPersistConfig, pizzasReducer),
  user: persistReducer(userPersistConfig, userReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
