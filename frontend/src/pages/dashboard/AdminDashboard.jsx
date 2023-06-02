import React from "react";
import { useSelector } from "react-redux";
import AdminHeader from "../../comopnents/dashboard/admin/AdminHeader";
import AdminSidebar from "../../comopnents/dashboard/admin/AdminSideBar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {

  const isLogin = useSelector((state) => state.auth.isLogin);
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
