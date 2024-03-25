import { createSelector } from '@reduxjs/toolkit';

const selectCars = state => state.data;

export const selectPizzas = createSelector(selectCars, data => data.pizzas);
