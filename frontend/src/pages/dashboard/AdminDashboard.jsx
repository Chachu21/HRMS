import React from "react";
import AdminHeader from "../../comopnents/dashboard/admin/AdminHeader";
import AdminSidebar from "../../comopnents/dashboard/admin/AdminSideBar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {

  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  return (
    <>
      {isLogin && (
        <div>
          <AdminHeader />
          <AdminSidebar />
          <div className="mt-[70px]">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
