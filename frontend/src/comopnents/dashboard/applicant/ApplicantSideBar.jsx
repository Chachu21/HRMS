import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddStaffCustomizedDialogs from "../../../pages/Registration/AddStaffCustomizedDiaogs";
import { humergerMenu } from "../../../redux/reducers/loginReducer";

const ApplicantSidebar = () => {
    
  const isClicked = useSelector((state) => state.auth.isClicked);
   const dispatch = useDispatch();
   const handleClick = () => {
     dispatch(humergerMenu());
   };

  return (
    <div
      className={`flex sm:block transition-transform ${
        isClicked ? "block" : "hidden"
      } `}
    >
      <aside
        id="logo-sidebar"
        className=" fixed top-1 left-0 z-40 lg:w-[18%] sm:w-[25%]  h-screen pt-20   text-black bg-white border-r border-gray-200 sm:translate-x-3  dark:bg-white dark:border-gray-200"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto  bg-white dark:bg-white">
          <ul className="space-y-5 font-medium text-blacks">
            <li onClick={handleClick}>
              <Link
                to="/applicant/dashboard/result"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-200"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3 text-black">Result</span>
              </Link>
            </li>

            <li onClick={handleClick}>
              <Link
                to="/applicant/dashboard/schedule"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-200"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3 text-black">Schedule</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default ApplicantSidebar;
