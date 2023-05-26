import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    id: "",
    fname: "",
    mname: "",
    lname: "",
    phone_number: "",
    password: "",
    email: "",
  },
  registrationStatus: null,
  error: null,
};

const staffSlice = createSlice({
  name: "AplicantRegister",
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
} = staffSlice.actions;

export default staffSlice.reducer;
