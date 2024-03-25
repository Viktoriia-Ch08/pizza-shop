import { createSlice } from '@reduxjs/toolkit';
import { fetchInfo } from './operations';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    pizzas: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzas = [...state.pizzas, ...action.payload.pizzas];
    });
    //   .addCase(fetchMakes.fulfilled, (state, action) => {
    //     state.makes = action.payload.sort((a, b) => a.localeCompare(b));
    //     state.isLoading = false;
    //   })

    //   .addMatcher(isAnyOf(fetchAdverts.pending, fetchMakes.pending), state => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
  },
});

export const dataReducer = dataSlice.reducer;
export const {
  setPageValue,
  setMakeFilterValue,
  resetFilters,
  setPriceFilterValue,
} = dataSlice.actions;
