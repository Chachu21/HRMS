import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/applicant/applicantRegisterReducer";
import staffRegister from './reducers/staff/staffRegisterReducer'

const store = configureStore({
  reducer: {
    aplicantRegister: registerReducer,
    login: loginReducer,
    staff: staffRegister,
  },
});

export default store;
