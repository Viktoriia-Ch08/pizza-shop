import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from './pizzasSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
