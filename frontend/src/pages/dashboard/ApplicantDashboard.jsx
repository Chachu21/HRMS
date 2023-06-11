import React from 'react'
import ApplicantHeader from '../../comopnents/dashboard/applicant/ApplicantHeader'
import ApplicantSidebar from '../../comopnents/dashboard/applicant/ApplicantSideBar'
import { Outlet } from 'react-router-dom'
const ApplicantDashboard = () => {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
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

