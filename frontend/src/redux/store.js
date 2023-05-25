import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./reducers/loginReducer";
import authReducer from "./reducers/authReducer";
import registerReducer from "./reducers/applicant/registerReducer";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    auth: authReducer,
  },
});

export default store;
