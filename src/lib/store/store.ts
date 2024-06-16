import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/username";


export const reduxStore = configureStore({
  reducer: {
    authReducer: authSlice,
  }
})