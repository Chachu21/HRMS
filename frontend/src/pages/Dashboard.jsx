import React, { useState } from "react";
import DashHeader from "../comopnents/dashboard/DashHeader";
import SideBar from "../comopnents/dashboard/SideBar";
import MainContent from "../comopnents/dashboard/MainContent";
import logo from "../assets/logo.jpg";
import profile from "../assets/profile.jpg";
import { FaSearch } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const initialState = {
  searchQuery: "",
};

const Dashboard = () => {
  //header
  const [formData, setFormData] = useState(initialState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isOpenSublink, setIsOpenSublink] = useState(false);
  function toggleUserMenu() {
    setUserMenuOpen((prevState) => !prevState);
  }

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
    console.log("clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search is done");
  };

  const handleToggle = () => {
    setIsOpenSublink(!isOpenSublink);
  };

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white text-black border-gray-200 dark:bg-gray-100 dark:border-gray-200 shadow-xl">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2 ">
              <button
                onClick={handleSidebarToggle}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-lg text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
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
                  className="h-[30px] w-[80px] rounded-md mr-3"
                  alt="logo "
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-black">
                  Equb
                </span>
              </Link>
            </div>
            <div className="flex items-center rounded-[5px]">
              <form
                action=""
                onSubmit={handleSubmit}
                className="flex items-center justify-center"
              >
                <input
                  id="search"
                  name="search"
                  value={formData.searchQuery}
                  onChange={(e) => {
                    setFormData({ ...formData, searchQuery: e.target.value });
                  }}
                  type="text"
                  className="bg-gray-100 w-[250px] outline-none border-2 border-gray-300 pl-3 lg:w-[350px] h-10 rounded-[5px] placeholder:text-[18px] leading-4 font-normal"
                  placeholder="search here...."
                />
                <button
                  type="submit"
                  className="bg-blue-400 h-10 flex px-[14px] justify-center items-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer"
                >
                  <FaSearch color="white" />
                </button>
              </form>
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
                      className="w-10 h-10 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user"
                    />
                  </button>
                </div>
                {isUserMenuOpen && (
                  <div
                    className="z-50 absolute right-0 mt-[380px] py-1 w-[200px]flex flex-col items-center justify-center gap-5 bg-gray-50  rounded shadow dark:bg-gray-100 "
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
                        className="text-sm text-gray-900 dark:text-gray-900 font-normal italic"
                        role="none"
                      >
                        user Name
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-700"
                        role="none"
                      >
                        phone number
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
                        <li>
                          <Link
                            to="#"
                            className="block px-2  py-1 text-sm text-blue-500 hover:bg-gray-200 dark:text-blue-500 dark:hover:bg-gray-200 dark:hover:text-blue-700"
                            role="menuitem"
                          >
                            Payment Method
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block  py-1 px-2 text-sm text-blue-400 hover:bg-gray-200 dark:text-blue-500 dark:hover:bg-gray-200 dark:hover:text-blue-300"
                            role="menuitem"
                          >
                            Address
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center my-10 cursor-pointer">
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

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-[18%] h-screen  pt-20 transition-transform -translate-x-full  text-black bg-white border-r border-gray-200 sm:-translate-x-0 dark:bg-white dark:border-gray-200`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto  bg-white dark:bg-white">
          <ul className="space-y-5 font-medium text-blacks">
            <li>
              <Link
                to="#"
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
                <span className="ml-3 text-black">Account</span>
              </Link>
            </li>

            <li>
              <button
                onClick={handleToggle}
                type="button"
                className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gray-700 dark:hover:bg-gray-200"
                aria-controls="dropdown-pages"
                data-collapse-toggle="dropdown-pages"
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
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Default Equb
                </span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {isOpenSublink && (
                <ul
                  id="dropdown-pages"
                  className="flex flex-col bg-gray-50 justify-center items-center py-2 space-y-2"
                >
                  <li>
                    <Link
                      to="/dashboard/dailyEqub"
                      className="flex items-center px-10 py-1.5 w-full text-base font-medium text-gray-700  transition duration-75  hover:bg-gray-200 rounded-lg dark:text-gray-700 dark:hover:bg-gray-200"
                    >
                      Daily Equb
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/weeklyEqub"
                      className="flex items-center px-10 py-1.5 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gray-700 dark:hover:bg-gray-200"
                    >
                      Weekly Equb
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/monthlyEqub"
                      className="flex items-center px-10 py-1.5 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gray-700 dark:hover:bg-gray-200"
                    >
                      Monthly Equb
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/dashboard/customEqub"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-200"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-black">
                  Custom Equb
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-200"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-black">
                  Setting
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
