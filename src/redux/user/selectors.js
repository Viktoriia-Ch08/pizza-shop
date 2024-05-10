import { createSelector } from "@reduxjs/toolkit";

const selectUserInfo = (state) => state.user;

export const selectUser = createSelector(selectUserInfo, (user) => user.user);
export const selectToken = createSelector(selectUserInfo, (user) => user.token);

export const selectIsAuth = createSelector(
  selectUserInfo,
  (user) => user.isAuth
);

export const selectPreOrders = createSelector(
  selectUserInfo,
  (user) => user.preOrders
);

export const selectPhoneNumber = createSelector(
  selectUserInfo,
  (user) => user.user.phoneNumber
);
