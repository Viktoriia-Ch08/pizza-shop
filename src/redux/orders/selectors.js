import { createSelector } from "@reduxjs/toolkit";

const selectData = (state) => state.orders;

export const selectConfirmedOrders = createSelector(
  selectData,
  (orders) => orders.confirmedOrders
);
export const selectOrder = createSelector(selectData, (orders) => orders.order);
