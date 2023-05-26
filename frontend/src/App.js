import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ContactPage from "./comopnents/contact/contactPage";
import JobVacancyAnnouncement from "./comopnents/vacancy/VacancyPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ForgotPassword from "./pages/ForgotPassword";

import Page404 from "./pages/404";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AdminMain from "./comopnents/dashboard/admin/AdminMain";
import About from "./pages/About";
import Vaccancy from "./pages/Vaccancy";
import ApplicantRegister from "./pages/Registration/ApplicantRegister";

function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<LandingPage />} />
        <Route
          exact={true}
          path="/signUpASapplicant"
          element={<ApplicantRegister />}
        />
        <Route exact={true} path="/login" element={<Login />} />

        <Route exact={true} path="/about" element={<About />} />
        <Route exact={true} path="/contact" element={<Vaccancy />} />

        {/* <Route
          exact={true}
          path="/forgotPassword"
          element={<ForgotPassword />}

        /> */}
        <Route path="/dashboard" element={<AdminDashboard />}>
          <Route index element={<AdminMain />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
      {/* <div>
        <JobVacancyAnnouncement />
        <ContactPage />
      </div> */}
    </div>
  );
}

export default App;
