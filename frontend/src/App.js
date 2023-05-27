import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page404 from "./pages/404";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AdminMain from "./comopnents/dashboard/admin/AdminMain";
import About from "./pages/About";
import Vacancy from "./pages/Vacancy";
import ApplicantRegister from "./pages/Registration/ApplicantRegister";
import ManageAccountInfo from "./comopnents/dashboard/admin/ManageAccountInfo";
import AddStaff from "./comopnents/dashboard/admin/AddStaff";
import ApproveRequest from "./comopnents/dashboard/admin/ApproveRequest";
import StaffRegister from "./pages/Registration/StaffRegister";

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
        <Route exact={true} path="/contact" element={<Vacancy />} />
        <Route path="/applicant" element={<AdminDashboard />}>
          <Route index element={<AdminMain />} />
          <Route
            path="/dashboard/manageaccount"
            element={<ManageAccountInfo />}
          />
          <Route path="/dashboard/addstaff" element={<AddStaff />} />
          <Route
            path="/dashboard/approverequest"
            element={<ApproveRequest />}
          />
        </Route>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<AdminMain />} />
          <Route path="/admin/addStaff" element={<StaffRegister />} />
          <Route
            path="/admin/approveRequestEmployee"
            element={<StaffRegister />}
          />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
