import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page404 from "./pages/404";
import LeaveRequest from "./posts/leaveRequest";
import Main from "./comopnents/landingPage/Main";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import Vacancy from "./pages/Vacancy";
import ApplicantRegister from "./pages/Registration/ApplicantRegister";
import ManageAccountInfo from "./comopnents/dashboard/admin/ManageAccountInfo";
import CustomizedDialogs from "./comopnents/landingPage/BootstrapingDialog";
import LoginCustomizedDialogs from "./comopnents/landingPage/LoginCustomizedDialogs";
import UpdateStaff from "./comopnents/dashboard/admin/UPdateStaff";
import ApplicantDashboard from "./pages/dashboard/ApplicantDashboard";
import EmployeeDashboard from "./pages/dashboard/EmployeeDashboard";
import ManagePermission from "./comopnents/dashboard/departmentHead/ManagePermission";
import DeptHeaderDashboard from "./pages/dashboard/DeptHeaderDashboard";
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
import LeaveRequests from "./comopnents/dashboard/hrOfficer/LeaveRequest";
import ViewEmployeeRequistion from "./comopnents/dashboard/hrOfficer/ViewEmployeeRequistion";
import ApproveLeave from "./comopnents/dashboard/hrOfficer/ApproveLeave";
import ApproveJobRank from "./comopnents/dashboard/hrOfficer/ApproveJobRank";
import ApplicantMain from "./comopnents/dashboard/applicant/ApplicantMain";
import ManageApplicant from "./comopnents/dashboard/departmentHead/ManageApplicant";
import ApplicantSchedule from "./comopnents/dashboard/applicant/ApplicantSchedule";
import ManageEmployeeAccount from "./comopnents/dashboard/employee/ManageAccount";
import ApplicantResult from "./comopnents/dashboard/applicant/ApplicantResult";
import ApplicantResultForm from "./comopnents/dashboard/departmentHead/ApplicantResultForm";
import DeanDashboard from "./pages/dashboard/DeanDashboard";
import ApproveEmployeeRequistion from "./comopnents/dashboard/Dean/ApproveEmployeeRequestion";
import ManageEmployeeRequisition from "./comopnents/dashboard/departmentHead/ManageEmployeeRequisition";
// import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div>
      <Routes>
        {/* homepage  route*/}
        <Route exact path="/" element={<LandingPage />}>
          <Route index element={<Main />} />
          <Route path="/vacancy" element={<Vacancy />} />
        </Route>
        {/* forgetpage */}
        {/* <Route path="/forgot" element={<ForgotPassword />} /> */}
        {/* applicant page */}
        <Route
          exact
          path="/signUpASapplicant"
          element={
            <CustomizedDialogs>
              <ApplicantRegister />
            </CustomizedDialogs>
          }
        />
        {/* login page */}
        <Route exact path="/login" element={<LoginCustomizedDialogs />} />
        {/* admin dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />}>
          <Route index element={<ManageAccountInfo />} />
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
        </Route>

        {/* dean dashboard */}
        <Route path="/dean/dashboard" element={<DeanDashboard />}>
          <Route index element={<ApproveEmployeeRequistion />} />
          <Route
            path="/dean/dashboard/approverequest"
            element={<ApproveEmployeeRequistion />}
          />
        </Route>

        {/* applicant dashboard */}
        <Route path="/applicant/dashboard" element={<ApplicantDashboard />}>
          <Route index element={<ApplicantMain />} />

          <Route
            path="/applicant/dashboard/result"
            element={<ApplicantResult />}
          />
          <Route
            path="/applicant/dashboard/schedule"
            element={<ApplicantSchedule />}
          />
        </Route>
        {/* HR officer page */}
        <Route path="/hrofficer/dashboard" element={<HRofficerDashboard />}>
          <Route index element={<HRofficerMain />} />
          <Route
            path="/hrofficer/dashboard/jobvacancy"
            element={<JobVacancyAnnouncement />}
          />
          <Route
            path="/hrofficer/dashboard/leaverequest"
            element={<LeaveRequests />}
          />
          <Route
            path="/hrofficer/dashboard/viewemployeerequistion"
            element={<ViewEmployeeRequistion />}
          />
          <Route
            path="/hrofficer/dashboard/approveLeave"
            element={<ApproveLeave />}
          />
          <Route
            path="/hrofficer/dashboard/approvejobrank"
            element={<ApproveJobRank />}
          />
          <Route
            path="/hrofficer/dashboard/schedul"
            element={<PostExamSchedule />}
          />
        </Route>
        {/* employee dashboard */}
        <Route path="/employee/dashboard" element={<EmployeeDashboard />}>
          <Route index element={<ManageEmployeeAccount />} />
          <Route
            path="/employee/dashboard/manageaccount"
            element={<ManageEmployeeAccount />}
          />
          <Route
            path="/employee/dashboard/leaveRequest"
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
        </Route>
        {/* department head dashboard */}
        <Route path="/depthead/dashboard" element={<DeptHeaderDashboard />}>
          <Route index element={<ManageApplicant />} />
          <Route
            path="/depthead/dashboard/managepermission"
            element={<ManagePermission />}
          />
          <Route
            path="/depthead/dashboard/manageemployeerequisition"
            element={<ManageEmployeeRequisition />}
          />
          <Route
            path="/depthead/dashboard/employeerequistion"
            element={<EmployeeRequistion />}
          />
          <Route
            path="/depthead/dashboard/jobrank"
            element={<ManageJobRank />}
          />
          <Route
            path="/depthead/dashboard/manageApplicant"
            element={<ManageApplicant />}
          />
          {/* <Route
            path="/depthead/dashboard/approverequest"
            element={<ApproveRequest />} 

          /> */}
          <Route
            path="/depthead/dashboard/applicantresult"
            element={<ApplicantResultForm />}
          />

          {/* /> */}

        </Route>
        {/* error page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
