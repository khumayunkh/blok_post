import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './PostSlice';

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});