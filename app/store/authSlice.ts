import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: "auth",
  initialState : {
    user: "",
    password: ""
  },
  reducers: {
    setAuthState: (state, action) => {
      return state =  {
        user: action.payload.user,
        password: action.payload.password
    }
    },
  },
});


export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;

