import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/applicant/applicantRegisterReducer";
import staffReducer from "./reducers/staff/staffRegisterReducer";

const store = configureStore({
  reducer: {
    aplicantRegister: registerReducer,
    login: loginReducer,
    staffRegister: staffReducer,
  },
});

export default store;
