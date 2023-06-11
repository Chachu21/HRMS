import React from 'react'
import { useSelector } from "react-redux";
import DeptHeader from '../../comopnents/dashboard/departmentHead/DeptHeader'
import DeptSideBar from '../../comopnents/dashboard/departmentHead/DeptSideBar'
import { Outlet } from 'react-router-dom'

const DeptHeaderDashboard = () => {

  const isLogin = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {isLogin && (
        <div>
          <DeptHeader />
          <DeptSideBar />
          <div className="mt-[70px]">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}

export default DeptHeaderDashboard