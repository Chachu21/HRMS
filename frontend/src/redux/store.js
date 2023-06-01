import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/applicant/applicantRegisterReducer";
import staffReducer from "./reducers/staff/staffRegisterReducer";
import vacancyReducer from "./reducers/post/vacancyReducer";

const store = configureStore({
  reducer: {
    aplicantRegister: registerReducer,
    staffRegister: staffReducer,
    vacancy:vacancyReducer,
    auth:authReducer
  },
});

export default store;
