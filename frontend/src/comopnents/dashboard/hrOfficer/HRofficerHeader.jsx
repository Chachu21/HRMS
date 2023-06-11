import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import profile from "../../../assets/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { humergerMenu, logout } from "../../../redux/reducers/loginReducer";
import axios from "axios";

const HrOfficerHeader = () => {
  const isClicked = useSelector((state) => state.auth.isClicked);
  const [image, setImage] = useState(null);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isUploadDisabled, setUploadDisabled] = useState(true);
  const [staff, setStaff] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  //fetch staff details
  useEffect(() => {
    const fetchstaffData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5002/api/v1/staff/${user.staff_id}`
        );
        setStaff(response.data);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchstaffData();
  }, [user.staff_id]);
  console.log(`http://localhost:5002/backend/uploads/${staff.profile}`);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setUploadDisabled(false);
  };

  //for sending request to backend including image
  const updateUserProfileImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      await axios.put(
        `http://localhost:5002/api/v1/staff/profile/${user.staff_id}`,
        formData
      );
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  function toggleUserMenu() {
    setUserMenuOpen((prevState) => !prevState);
  }

  const handleSidebarToggle = () => {
    dispatch(humergerMenu());
  };

  return (
    <>
      {isLogin && (
        <div>
          <nav className="fixed top-0 z-50 w-full bg-white text-black border-gray-200 dark:bg-gray-100 dark:border-gray-200 shadow-sm">
            <div className="px-3 py-1 lg:px-5 lg:pl-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-2 ">
                  <button
                    onClick={handleSidebarToggle}
                    data-drawer-target="logo-sidebar"
                    data-drawer-toggle="logo-sidebar"
                    aria-controls="logo-sidebar"
                    aria-expanded={isClicked}
                    type="button"
                    class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                    <div
                      className={`text-lg cursor-pointer font-bold flex justify-center items-center gap-2 mr-4 py-1 whitespace-nowrap capitalize text-center text-gray-500  ${
                        location.pathname === "/profile" ? "text-gray-400" : ""
                      }`}
                    >
                      <span>{user && user.email}</span>
                      <div className="flex justify-center items-center gap-[10px]">
                        <img
                          onClick={toggleUserMenu}
                          className="w-[64px] h-[64px] object-cover rounded-full "
                          src={
                            staff.profile
                              ? `http://localhost:5002/uploads/${staff.profile}`
                              : profile
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    {isUserMenuOpen && (
                      <div
                        className="z-1 absolute right-0 top-[70px] py-1  flex flex-col items-center justify-center gap-5 bg-[#f7f7f6]  rounded shadow dark:bg-gray-200 "
                        id="dropdown-user"
                      >
                        <div
                          className=" flex items-center justify-center flex-col gap-5 px-3 py-4"
                          role="none"
                        >
                          <label
                            htmlFor="image-input"
                            className="bg-gray-200 text-gray-800  px-3 h-8 flex items-center  rounded-md cursor-pointer"
                          >
                            Choose photo
                            <input
                              type="file"
                              id="image-input"
                              name="image"
                              className="hidden"
                              onChange={handleImageSelect}
                            />
                          </label>
                          <button
                            className="bg-gray-200 rounded-md text-gray-800 px-3 h-8 cursor-pointer"
                            onClick={() => {
                              updateUserProfileImage();
                              toggleUserMenu();
                            }}
                            disabled={isUploadDisabled}
                          >
                            Change photo
                          </button>
                        </div>
                        <div
                          onClick={() => {
                            dispatch(logout());
                            navigate("/");
                          }}
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
        </div>
      )}
    </>
  );
};

export default HrOfficerHeader;
