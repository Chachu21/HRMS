import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page404 from "./pages/404";
import LeaveRequest from "./posts/leaveRequest";
import Main from "./comopnents/landingPage/Main";
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
import ManagePermission from "./comopnents/dashboard/departmentHead/ManagePermission";
import DeptHeaderDashboard from "./pages/dashboard/DeptHeaderDashboard";
import DeptMain from "./comopnents/dashboard/departmentHead/DeptMain";
import HRofficerDashboard from "./pages/dashboard/HRofficerDashboard";
import HRofficerMain from "./comopnents/dashboard/hrOfficer/HRofficerMain";

import AddStaffCustomizedDialogs from "./pages/Registration/AddStaffCustomizedDiaogs";
import StaffRegister from "./pages/Registration/StaffRegister";
import EmployeeRequistion from "./comopnents/dashboard/departmentHead/EmployeeRequistion";
import ManageJobRank from "./comopnents/dashboard/departmentHead/ManageJobRank";
import JobVacancyAnnouncement from "./comopnents/vacancy/VacancyPage";
import PostExamSchedule from "./posts/PostExamSchedule";
import RequestPermission from "./posts/RequestPermission";
import RequestJobRank from "./posts/RequestJobRank";
import JobRankDetails from "./comopnents/dashboard/hrOfficer/JobRankDetails";
import { Provider } from "react-redux";
import store from "./comopnents/dashboard/departmentHead/store";
import PostVaccancy from "./posts/PostVaccancy";

function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<LandingPage />}>
          <Route index element={<Main />} />

          <Route exact={true} path="/about" element={<About />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route exact={true} path="/contact" element={<Contact />} />
          <Route exact={true} path="/help" element={<Help />} />
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
        <Route path="/applicant/dashboard" element={<ApplicantDashboard />}>
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
            path="/hrofficer/dashboard/jobvacancy"
            element={<PostVaccancy />}
          />
          <Route
            path="/hrofficer/dashboard/jobrankdeatils"
            element={<JobRankDetails />}
          />
          <Route
            path="/hrofficer/dashboard/schedul"
            element={<PostExamSchedule />}
          />
        </Route>

        <Route path="/employee/dashboard" element={<EmployeeDashboard />}>
          <Route index element={<EmployeeMain />} />
          <Route
            path="/employee/dashboard/manageaccount"
            element={<LeaveRequest />}
          />
          <Route />
          <Route
            index
            path="/employee/dashboard/RequestPermission"
            element={<RequestPermission />}
          />
          <Route
            path="/employee/dashboard/RequestJobRank"
            element={<RequestJobRank />}
          />

          {/* <Route
            path="/employee/dashboard/approverequest"
            element={<ApproveRequest />}
          /> */}
        </Route>

        <Route path="/depthead/dashboard" element={<DeptHeaderDashboard />}>
          <Route index element={<DeptMain />} />
          <Route
            path="/depthead/dashboard/managepermission"
            element={<ManagePermission />}
          />
          <Route
            path="/depthead/dashboard/employeerequistion"
            element={<EmployeeRequistion />}
          />
          <Route
            path="/depthead/dashboard/jobrank"
            element={
              <Provider store={store}>
                <ManageJobRank />
              </Provider>
            }
          />
          <Route
            path="/depthead/dashboard/approverequest"
            element={<ApproveRequest />}
          />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
