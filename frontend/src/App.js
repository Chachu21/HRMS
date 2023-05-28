import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page404 from "./pages/404";
import Main from './comopnents/landingPage/Main'
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AdminMain from "./comopnents/dashboard/admin/AdminMain";
import About from "./pages/About";
import Vacancy from "./pages/Vacancy";
import ApplicantRegister from "./pages/Registration/ApplicantRegister";
import ManageAccountInfo from "./comopnents/dashboard/admin/ManageAccountInfo";
import AddStaff from "./comopnents/dashboard/admin/AddStaff";
import ApproveRequest from "./comopnents/dashboard/admin/ApproveRequest";
import CustomizedDialogs from "./comopnents/landingPage/BootstrapingDialog";
import LoginCustomizedDialogs from "./comopnents/landingPage/LoginCustomizedDialogs";
import UpdateStaff from "./comopnents/dashboard/admin/UPdateStaff";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import ApplicantDashboard from "./pages/dashboard/ApplicantDashboard";
import EmployeeDashboard from "./pages/dashboard/EmployeeDashboard";
import EmployeeMain from "./comopnents/dashboard/employee/EmployeeMain";
import DeptHeaderDashboard from "./pages/dashboard/DeptHeaderDashboard";
import DeptMain from "./comopnents/dashboard/departmentHead/DeptMain";
import HRofficerDashboard from "./pages/dashboard/HRofficerDashboard";
import HRofficerMain from "./comopnents/dashboard/hrOfficer/HRofficerMain";

import AddStaffCustomizedDialogs from "./pages/Registration/AddStaffCustomizedDiaogs";
import StaffRegister from "./pages/Registration/StaffRegister";


function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<LandingPage />}>
          <Route index element={<Main />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route
          exact={true}
          path="/signUpASapplicant"
          element={
            <CustomizedDialogs>
              <ApplicantRegister />
            </CustomizedDialogs>
          }
        />
        <Route
          exact={true}
          path="/login"
          element={
            <LoginCustomizedDialogs>
              <Login />
            </LoginCustomizedDialogs>
          }
        />
        {/* <Route exact={true} path="/about" element={<About />} /> */}
        {/* <Route exact={true} path="/vacancy" element={<Vacancy />} /> */}
        <Route exact={true} path="/contact" element={<Contact />} />
        <Route exact={true} path="/help" element={<Help />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />}>
          <Route index element={<AdminMain />} />
          <Route
            path="/admin/dashboard/manageaccount"
            element={<ManageAccountInfo />}
          />
          <Route
            path="/admin/dashboard/manageaccount/update/:id"
            element={<UpdateStaff />}
          />

          <Route
            path="/admin/dashboard/addstaff"
            element={
              <AddStaffCustomizedDialogs>
                <StaffRegister />
              </AddStaffCustomizedDialogs>
            }
          />
          <Route
            path="/admin/dashboard/approverequest"
            element={<ApproveRequest />}
          />
        </Route>
        {/* <Route path="/applicant/dashboard" element={<ApplicantDashboard />}>
          <Route index element={<AdminMain />} />

          <Route
            path="/applicant/dashboard/manageaccount"
            element={<ManageAccountInfo />}
          />
          <Route
            path="/applicant/dashboard/manageaccount/update/:id"
            element={<UpdateStaff />}
          />
          <Route path="/applicant/dashboard/addstaff" element={<AddStaff />} />
          <Route
            path="/applicant/dashboard/approverequest"
            element={<ApproveRequest />}
          />
        </Route>
        <Route path="/hrofficer/dashboard" element={<HRofficerDashboard />}>
          <Route index element={<HRofficerMain />} />
          <Route
            path="/hrofficer/dashboard/manageaccount"
            element={<ManageAccountInfo />}
          />
          <Route
            path="/hrofficer/dashboard/manageaccount/update/:id"
            element={<UpdateStaff />}
          />
          <Route path="/hrofficer/dashboard/addstaff" element={<AddStaff />} />
          <Route
            path="/hrofficer/dashboard/approverequest"
            element={<ApproveRequest />}
          />
        </Route>

        <Route path="/employee/dashboard" element={<EmployeeDashboard />}>
          <Route index element={<EmployeeMain />} />
          <Route
            path="/employee/dashboard/manageaccount"
            element={<ManageAccountInfo />}
          />
          <Route
            path="/employee/dashboard/manageaccount/update/:id"
            element={<UpdateStaff />}
          />
          <Route path="/employee/dashboard/addstaff" element={<AddStaff />} />
          <Route
            path="/employee/dashboard/approverequest"
            element={<ApproveRequest />}
          />
        </Route>
        <Route path="/depthead/dashboard" element={<DeptHeaderDashboard />}>
          <Route index element={<DeptMain />} />
          <Route
            path="/depthead/dashboard/manageaccount"
            element={<ManageAccountInfo />}
          />
          <Route
            path="/depthead/dashboard/manageaccount/update/:id"
            element={<UpdateStaff />}
          />
          <Route path="/depthead/dashboard/addstaff" element={<AddStaff />} />
          <Route
            path="/depthead/dashboard/approverequest"
            element={<ApproveRequest />}
          />
        </Route> */}

        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
