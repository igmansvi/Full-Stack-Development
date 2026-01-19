import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/couterSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
