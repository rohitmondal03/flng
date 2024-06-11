import { configureStore } from "@reduxjs/toolkit";

import usernameSlice from "./slices/username";


export const reduxStore = configureStore({
  reducer: {
    userName: usernameSlice,
  }
})