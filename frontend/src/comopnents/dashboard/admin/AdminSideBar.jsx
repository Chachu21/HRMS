import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddStaffCustomizedDialogs from "../../../pages/Registration/AddStaffCustomizedDiaogs";
import { humergerMenu } from "../../../redux/reducers/loginReducer";

const AdminSidebar = () => {
  // const [isOpenSublink, setIsOpenSublink] = useState(false)
  const isClicked = useSelector((state) => state.auth.isClicked);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(humergerMenu());
  };
  return (
    <div
      className={`flex sm:flex transition-transform ${
        isClicked ? "flex z-[1]" : "hidden"
      } `}
    >
      <aside
        id="logo-sidebar"
        // transition-transform -translate-x-full
        className=" fixed top-1 left-0 z-40 lg:w-[18%] h-screen pt-20   text-black bg-white border-r border-gray-200 sm:translate-x-0  dark:bg-white dark:border-gray-200"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto  bg-white dark:bg-white">
          <ul className="space-y-5 font-medium text-blacks">
            <li onClick={handleClick}>
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

            <li
              onClick={handleClick}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-200 gap-2"
            >
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
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
