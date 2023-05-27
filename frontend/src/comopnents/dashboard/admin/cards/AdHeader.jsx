import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../../assets/logo.jpg";
import profile from "../../../../assets/profile.jpg";

const AdHeader = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const location = useLocation();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  function toggleUserMenu() {
    setUserMenuOpen((prevState) => !prevState);
  }
  return (
    <>
      <nav className="fixed top-0 left-0 w-screen flex flex-wrap items-center lg:h-[70px] justify-between bg-[#f7f7f7] shadow-lg mb-1 z-[1]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              exact
              to="/"
              className={`text-lg font-bold flex justify-center items-center mr-4 py-2 whitespace-nowrap uppercase text-center text-blue-500 brand ${
                location.pathname === "/" ? "text-gray-400" : ""
              }`}
            >
              <div className="flex justify-center items-center gap-5">
                <img
                  className="w-[80px] h-[60px] object-cover rounded-xl p-2"
                  src={logo}
                  alt="equb_logo"
                />
                HR Management
              </div>
            </NavLink>
            <button
              className="text-black cursor-pointer absolute top-[0px] right-[0px] text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none h-full flex justify-center items-center"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <AiOutlineClose className="closeIcon" />
              ) : (
                <GiHamburgerMenu className="menuBar" />
              )}
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center${
              navbarOpen ? " flex" : " hidden"
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex text-black flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="flex items-center">
                <NavLink
                  exact
                  to="/admin/AddStaff"
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75 ${
                    location.pathname === "/AddStaff" ? "text-gray-400" : ""
                  }`}
                >
                  Add Staff
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/dashboard"
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75 ${
                    location.pathname === "/manageAccount"
                      ? "text-gray-400"
                      : ""
                  }`}
                >
                  Manage Account
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/about"
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75 ${
                    location.pathname === "/approveRequestEmployee"
                      ? "text-gray-400"
                      : ""
                  }`}
                >
                  <div class="relative inline-flex w-fit">
                    <div class="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                      99+
                    </div>
                    <button
                      type="button"
                      class="inline-block rounded bg-blue-400 px-5 pb-1.5 pt-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                     approve
                    </button>
                  </div>
                </NavLink>
              </li>
            </ul>
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
                        Email
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
    </>
  );
};

export default AdHeader;
