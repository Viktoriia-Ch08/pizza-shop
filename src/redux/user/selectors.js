import { createSelector } from "@reduxjs/toolkit";

const selectUserInfo = (state) => state.user;

export const selectUser = createSelector(selectUserInfo, (user) => user.user);
export const selectToken = createSelector(selectUserInfo, (user) => user.token);

export const selectIsAuth = createSelector(
  selectUserInfo,
  (user) => user.isAuth
);

export const selectPreviousOrders = createSelector(
  selectUserInfo,
  (user) => user.orders
);

export const selectPhoneNumber = createSelector(
  selectUserInfo,
  (user) => user.user.phoneNumber
);
