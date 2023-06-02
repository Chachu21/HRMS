import React from 'react'
import ApplicantHeader from '../../comopnents/dashboard/applicant/ApplicantHeader'
import ApplicantSidebar from '../../comopnents/dashboard/applicant/ApplicantSideBar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
const ApplicantDashboard = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
   return (
     <>
       {isLogin && (
         <div>
           <ApplicantHeader />
           <ApplicantSidebar />
           <div className="mt-[70px]">
             <Outlet />
           </div>
         </div>
       )}
     </>
   );
}

export default ApplicantDashboard

