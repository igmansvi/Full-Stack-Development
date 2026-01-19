import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice.js";
import cartReducer from "../slices/cartSlice.js";
import themeReducer from "../slices/themeSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default store;
