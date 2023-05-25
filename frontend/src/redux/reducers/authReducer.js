
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setAcceptTerms: (state, action) => {
      state.acceptTerms = action.payload;
    },
    resetPasswordRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    resetPasswordSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    resetPasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordReset: (state) => {
      state.phoneNumber = "";
      state.password = "";
      state.confirmPassword = "";
      state.acceptTerms = false;
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
});

export const {
  setPhoneNumber,
  setPassword,
  setConfirmPassword,
  setAcceptTerms,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
  resetPasswordReset,
} = authSlice.actions;

export default authSlice.reducer;
