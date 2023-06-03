import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    fname: "",
    lname: "",
    phone_number: "",
    password: "",
    email: "",
    cv: "",
    isApproved:false,
    isRejected:false,
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
    approvedApplicant: (state) => {
      state.isApproved = true;
    },
    rejectApplicant: (state) => {
      state.isRejected = true;
    },
  },
});

export const {
  setFormData,
  setRegistrationStatus,
  setError,
  resetRegistration,
  approvedApplicant,
  rejectApplicant,
} = registerSlice.actions;

export default registerSlice.reducer;
