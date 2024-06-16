import { createSlice } from "@reduxjs/toolkit"


export const authSlie = createSlice({
  name: "username",
  initialState: "",
  reducers: {
    setUsersName: (state, action) => state = action.payload,
    setUsersEmail: (state, action) => state = action.payload,
  },
});


export const { setUsersEmail, setUsersName } = authSlie.actions;
export default authSlie.reducer;