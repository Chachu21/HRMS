import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/loginReducer";
import staffReducer from "./reducers/staff/staffRegisterReducer";
import vacancyReducer from "./reducers/post/vacancyReducer";

const store = configureStore({
  reducer: {
    staffRegister: staffReducer,
    vacancy:vacancyReducer,
    auth:authReducer
  },
});

export default store;
