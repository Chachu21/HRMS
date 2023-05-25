import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/applicant/applicantRegisterReducer";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
   
  },
});

export default store;
