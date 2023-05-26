import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  rememberMe:false,
  loggedIn: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRememberMe: (state, action) => {
      state.rememberMe =action.payload
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetLogin: (state) => {
      state.email = "";
      state.password = "";
      state.loggedIn = false;
      state.error = null;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setLoggedIn,
  setRememberMe,
  setError,
  resetLogin,
} = loginSlice.actions;

export default loginSlice.reducer;
