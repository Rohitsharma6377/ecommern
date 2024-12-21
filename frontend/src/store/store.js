import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    auth: authReducer, // The auth slice is correctly connected here
  },
  // Adding default middleware customization if needed
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable warnings for non-serializable values if any
    }),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development mode
});

export default store;
