import React from 'react'
import DeptHeader from '../../comopnents/dashboard/departmentHead/DeptHeader'
import DeptSideBar from '../../comopnents/dashboard/departmentHead/DeptSideBar'
import DeptMain from '../../comopnents/dashboard/departmentHead/DeptMain'

const DeptHeaderDashboard = () => {
  return (
    <div>
      <DeptHeader />
      <DeptSideBar />
      <DeptMain />
    </div>
  )
}

export default DeptHeaderDashboard