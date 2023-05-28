import React from 'react'
import EmployeeHeader from '../../comopnents/dashboard/employee/EmployeeHeader'
import EmployeeSidebar from '../../comopnents/dashboard/employee/EmployeeSidebar'
import EmployeeMain from '../../comopnents/dashboard/employee/EmployeeMain'

const EmployeeDashboard = () => {
  return (
    <div>
      <EmployeeHeader />
      <EmployeeSidebar />
      <EmployeeMain />
    </div>
  )
}

export default EmployeeDashboard