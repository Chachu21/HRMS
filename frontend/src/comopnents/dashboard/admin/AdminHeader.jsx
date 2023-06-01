import React, { useState } from "react";

import { humbergerClicked } from "../../../redux/reducers/loginReducer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/logo.jpg";
import profile from "../../../assets/profile.jpg";
import { logout } from "../../../redux/reducers/loginReducer";


const AdminHeader = () => {
 

  const isClicked = useSelector((state) => state.login.isClicked);
  
  const dispatch=useDispatch()


  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isLogin = useSelector((state) => state.auth.isLogin);

  function toggleUserMenu() {
    setUserMenuOpen((prevState) => !prevState);
  }

  const handleSidebarToggle = () => {
    dispatch(humbergerClicked())
   
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
{ isLogin && (<div>
      <nav className="fixed top-0 z-50 w-full bg-white text-black border-gray-200 dark:bg-gray-100 dark:border-gray-200 shadow-xl">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2 ">
              <button
                onClick={handleSidebarToggle}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                aria-expanded={isClicked}
                type="button"

                
                class="inline-flex items-center sm:hidden p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link to="/dashboard" className="flex ml-2 md:mr-24">
                <img
                  src={logo}
                  className="h-[50px] w-[50px] rounded-md mr-3"
                  alt="logo "
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-black">
                  HRMS
                </span>
              </Link>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    onClick={toggleUserMenu}
                    className="flex text-sm bg-gray-100 rounded-full dark:bg-white focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded={isUserMenuOpen}
                    aria-controls="dropdown-user"
                  >
                    <img
                      className="w-[50px] h-[50px] rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user"
                    />
                  </button>
                </div>
                {isUserMenuOpen && (
                  <div
                    className="z-50 absolute right-0 mt-[350px] py-1 w-[200px]flex flex-col items-center justify-center gap-5 bg-gray-50  rounded shadow dark:bg-gray-100 "
                    id="dropdown-user"
                  >
                    <div
                      className="px-4 py-3 flex items-center justify-center flex-col gap-2"
                      role="none"
                    >
                      <img
                        src={profile}
                        className="w-[80px] h-[80px] rounded-full"
                        alt=""
                      />
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-700"
                        role="none"
                      >
                        {user && user.email}
                      </p>
                    </div>
                    <hr className="h-1  bg-gray-300 w-full" />

                    <div className="flex mt-2">
                      <ul
                        className="flex justify-center items-center gap-5 px-3"
                        role="none"
                      >
                        <li>
                          <Link
                            to="#"
                            className="block px-[10px] py-1 text-sm text-blue-500 text-center hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-200 dark:hover:text-blue-500"
                            role="menuitem"
                          >
                            Password
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div
                      onClick={handleLogout}
                      className="text-center my-10 cursor-pointer"
                    >
                      <span className="px-5 py-2 bg-red-300 rounded-md hover:bg-red-200">
                        Logout
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>)
}

    </>
  );
};

export default AdminHeader;
