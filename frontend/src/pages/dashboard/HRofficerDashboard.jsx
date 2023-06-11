import React from "react";
import HRofficerHeader from "../../comopnents/dashboard/hrOfficer/HRofficerHeader";
import { Outlet } from "react-router-dom";
import Sidebar from "../../comopnents/dashboard/hrOfficer/SideBar";

const HRofficerDashboard = () => {
      const isLogin = JSON.parse(localStorage.getItem("user"));

  return (
   <>
   {
    isLogin && ( <div>
      <HRofficerHeader />
      <Sidebar />
      <div className="mt-[70px]"></div>
      <Outlet />
    </div>)
   }
   </>
  );
};

export default HRofficerDashboard;
