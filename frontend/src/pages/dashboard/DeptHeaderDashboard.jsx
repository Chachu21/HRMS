import React from 'react'
import DeptHeader from '../../comopnents/dashboard/departmentHead/DeptHeader'
import DeptSideBar from '../../comopnents/dashboard/departmentHead/DeptSideBar'
import { Outlet } from 'react-router-dom'

const DeptHeaderDashboard = () => {
  return (
    <div>
      <DeptHeader />
      <DeptSideBar />
      <div className="mt-[70px]">
        <Outlet />
      </div>
    </div>
  );
}

export default DeptHeaderDashboard