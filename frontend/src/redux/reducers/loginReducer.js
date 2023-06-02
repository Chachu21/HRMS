import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  isOpen:false,
  isClicked:false,
  isLoading: false,
  isLogin: false,

};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
      state.isLogin = true;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
      state.isLogin = false;
    },
    logout: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
      state.isLogin = false;
    },
    humbergerClicked:(state)=>{
      state.isClicked=!state.isClicked
    }
  },
});



export const { loginStart, loginSuccess, loginFailure, logout, humbergerClicked } =
  authSlice.actions;

export default authSlice.reducer;
