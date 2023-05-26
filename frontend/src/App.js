import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Page404 from "./pages/404";
import MainContent from "./comopnents/dashboard/MainContent";
import DailyEqub from "./comopnents/dashboard/equb/DailyEqub";
import WeeklyEqub from "./comopnents/dashboard/equb/WeeklyEqub";
import CustomEqub from "./comopnents/dashboard/equb/CustomEqub";
import Monthly from "./comopnents/dashboard/equb/MonthlyEqub";

function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<LandingPage />} />
        <Route exact={true} path="/signUp" element={<Register />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route
          exact={true}
          path="/forgotPassword"
          element={<ForgotPassword />}
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/dailyEqub" element={<DailyEqub />} />
          <Route path="/dashboard/weeklyEqub" element={<WeeklyEqub />} />
          <Route path="/dashboard/monthlyEqub" element={<Monthly />} />
          <Route path="/dashboard/customEqub" element={<CustomEqub />} />
          <Route index element={<MainContent />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
