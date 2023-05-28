import React from "react";
import HRofficerHeader from "../../comopnents/dashboard/hrOfficer/HRofficerHeader";
import { Outlet } from "react-router-dom";

const HRofficerDashboard = () => {
  return (
    <div>
      <HRofficerHeader />
      <div className="mt-[70px]"></div>
      <Outlet />
    </div>
  );
};

export default HRofficerDashboard;
