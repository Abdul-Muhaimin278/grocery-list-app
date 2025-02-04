import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./category/categorySlice";
import { authReducer } from "./auth/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    category: categoryReducer.reducer,
  },
});
