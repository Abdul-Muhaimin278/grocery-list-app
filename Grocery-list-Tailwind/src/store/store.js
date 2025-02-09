import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./category/categorySlice";
import { authReducer } from "./auth/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "uid"],
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: ["auth.register"],
      },
    }),
});

export const persistor = persistStore(store);
