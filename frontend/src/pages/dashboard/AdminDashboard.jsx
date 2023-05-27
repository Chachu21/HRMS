import React from 'react'
import AdHeader from '../../comopnents/dashboard/admin/cards/AdHeader'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
      <AdHeader />
      <div className='mt-20'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboard