import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    fname: "",
    lname: "",
    phone_number: "",
    password: "",
    email: "",
    cv: "",
  },
  registrationStatus: false,
  error: null,
};

const registerSlice = createSlice({
  name: "aplicantRegister",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setRegistrationStatus: (state, action) => {
      state.registrationStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetRegistration: (state) => {
      state.formData = initialState.formData;
      state.registrationStatus = null;
      state.error = null;
    },
  },
});

export const {
  setFormData,
  setRegistrationStatus,
  setError,
  resetRegistration,
} = registerSlice.actions;

export default registerSlice.reducer;
