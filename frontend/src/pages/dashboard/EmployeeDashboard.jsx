import React from 'react'
import EmployeeHeader from '../../comopnents/dashboard/employee/EmployeeHeader'
import EmployeeSidebar from '../../comopnents/dashboard/employee/EmployeeSidebar'
import { Outlet } from 'react-router-dom'

const EmployeeDashboard = () => {

    const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  return (
    <>
      {isLogin && (
        <div>
          <EmployeeHeader />
          <EmployeeSidebar />
          <div className="mt-[70px]">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}

export default EmployeeDashboard