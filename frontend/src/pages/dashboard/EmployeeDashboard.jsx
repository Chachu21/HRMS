import React from 'react'
import EmployeeHeader from '../../comopnents/dashboard/employee/EmployeeHeader'
import EmployeeSidebar from '../../comopnents/dashboard/employee/EmployeeSidebar'
import EmployeeMain from '../../comopnents/dashboard/employee/EmployeeMain'
import { Outlet } from 'react-router-dom'

const EmployeeDashboard = () => {
  return (
    <div>
      <EmployeeHeader />
      <EmployeeSidebar />
      <div className="mt-[70px]">
        <Outlet />
      </div>
    </div>
  );
}

export default EmployeeDashboard