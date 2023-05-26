import React from 'react'
import AdminHeader from '../../comopnents/dashboard/admin/AdminHeader'
import AdminSidebar from '../../comopnents/dashboard/admin/AdminSideBar'
import AdminMain from '../../comopnents/dashboard/admin/AdminMain'

const AdminDashboard = () => {
  return (
    <div>
      <AdminHeader />
      <AdminSidebar />
      <AdminMain />
    </div>
  )
}

export default AdminDashboard