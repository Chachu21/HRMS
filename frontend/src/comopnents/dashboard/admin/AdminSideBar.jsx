import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddStaffCustomizedDialogs from "../../../pages/Registration/AddStaffCustomizedDiaogs";

const AdminSidebar = () => {
  // const [isOpenSublink, setIsOpenSublink] = useState(false)
  const isClicked = useSelector((state) => state.auth.isClicked);
  return (
    <div
      className={`flex sm:flex transition-transform ${
        isClicked ? "flex z-[1]" : "hidden"
      } `}
    >
      
          <div className="h-full px-3 pb-4 overflow-y-auto  bg-white dark:bg-white">
            <ul className="space-y-5 font-medium text-blacks">
              <li>
                <Link
                  to="/admin/dashboard/manageaccount"
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
                  <span className="ml-3 text-black">Manage Account</span>
                </Link>
              </li>

            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-200 gap-2">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-100 dark:text-gray-500 dark:group-hover:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <AddStaffCustomizedDialogs />
              {/* {isOpenSublink && (
                <ul
                  id="dropdown-pages"
                  className="flex flex-col bg-gray-50 justify-center items-center py-2 space-y-2"
                ></ul>
              )} */}
            </li>
            <li className="flex items-center">
              <Link
                to="/admin/dashboard/approverequest"
                className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75`}
              >
                <div className="relative inline-flex w-fit">
                  <div className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-flex -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                    99+
                  </div>
                  <button
                    type="button"
                    className="inline-flex rounded bg-blue-400 w-40 px-5 pb-1.5 pt-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    approve
                  </button>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;

// {isOpenSublink && (
//                 <ul
//                   id="dropdown-pages"
//                   className="flex flex-col bg-gray-50 justify-center items-center py-2 space-y-2"
//                 ></ul>
//               )}
