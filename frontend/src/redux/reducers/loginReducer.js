import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
  password: "",
  loggedIn: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetLogin: (state) => {
      state.phoneNumber = "";
      state.password = "";
      state.loggedIn = false;
      state.error = null;
    },
  },
});

export const {
  setPhoneNumber,
  setPassword,
  setLoggedIn,
  setError,
  resetLogin,
} = loginSlice.actions;

export default loginSlice.reducer;
