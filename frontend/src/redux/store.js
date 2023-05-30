import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/applicant/applicantRegisterReducer";
import staffReducer from "./reducers/staff/staffRegisterReducer";
import vacancyReducer from "./reducers/post/vacancyReducer";

const store = configureStore({
  reducer: {
    aplicantRegister: registerReducer,
    login: loginReducer,
    staffRegister: staffReducer,
    vacancy:vacancyReducer
  },
});

export default store;
