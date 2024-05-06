import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { pizzasReducer } from "./pizzas/pizzasSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/userSlice";
import { ordersReducer } from "./orders/ordersSlice";

const ordersPersistConfig = {
  key: "data",
  storage,
  whitelist: ["order", "confirmedOrders"],
};

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token", "isAuth", "user", "orders"],
};

const rootReducer = combineReducers({
  data: pizzasReducer,
  user: persistReducer(userPersistConfig, userReducer),
  orders: persistReducer(ordersPersistConfig, ordersReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
