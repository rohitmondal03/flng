import { configureStore } from "@reduxjs/toolkit";

import usernameReducer from "./slices/username";


export const store = configureStore({
  reducer: {
    userName: usernameReducer,
  }
})