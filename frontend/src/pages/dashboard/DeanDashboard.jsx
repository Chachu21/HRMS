import React from "react";
import { useSelector } from "react-redux";
import DeanSideBar from "../../comopnents/dashboard/Dean/DeanSideBar";
import { Outlet } from "react-router-dom";
import DeanHeader from "../../comopnents/dashboard/Dean/DeanHeader";

const DeanDashboard = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <>
      {isLogin && (
        <div>
          <DeanHeader />
          <DeanSideBar />
          <div className="mt-[70px]">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default DeanDashboard;
