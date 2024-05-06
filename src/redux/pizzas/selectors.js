import { createSelector } from "@reduxjs/toolkit";

const selectData = (state) => state.data;

export const selectPizzas = createSelector(selectData, (data) => data.pizzas);
