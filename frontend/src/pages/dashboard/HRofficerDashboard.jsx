import React from 'react'
import HRofficerHeader from '../../comopnents/dashboard/hrOfficer/HRofficerHeader'
import HRofficerSidebar from '../../comopnents/dashboard/hrOfficer/HRofficerSidebar'
import HRofficerMain from '../../comopnents/dashboard/hrOfficer/HRofficerMain'

const HRofficerDashboard = () => {
  return (
    <div>
      <HRofficerHeader />
      <HRofficerSidebar />
      <HRofficerMain />
    </div>
  )
}

export default HRofficerDashboard