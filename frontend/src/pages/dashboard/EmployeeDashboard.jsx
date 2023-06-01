import React from 'react'
import EmployeeHeader from '../../comopnents/dashboard/employee/EmployeeHeader'
import EmployeeSidebar from '../../comopnents/dashboard/employee/EmployeeSidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const EmployeeDashboard = () => {

    const isLogin = useSelector((state) => state.auth.isLogin);

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