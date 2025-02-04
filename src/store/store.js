import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./category/categorySlice";
import { authReducer } from "./auth/AuthSlice";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import { persistReducer, persistStore } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer.reducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    category: categoryReducer.reducer,
  },
});

export const persistor = persistStore(store);
