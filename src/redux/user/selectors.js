import { createSelector } from "@reduxjs/toolkit";

const selectUserInfo = (state) => state.user;

export const selectUser = createSelector(selectUserInfo, (data) => data.user);
export const selectToken = createSelector(selectUserInfo, (data) => data.token);
