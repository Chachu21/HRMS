import React from "react";
import { Link } from "react-router-dom";
const HRofficerMain = () => {
  return (
    <>
      <div className="lg:ml-[18%] mt-14 ">
        <div className="flex flex-col justify-center items-center gap-10 border-gray-200 border-solid rounded-md dark:border-gray-300 mt-5">
          <div className="grid grid-cols-3 gap-20 px-24 py-[15px] mb-4 fixed top-[80px] left-auto bg-[#f7f7f7]">
            <Link to="/leaverequest">
              <div className="flex flex-col gap-[10px] w-[250px]  items-center justify-center h-[120px] rounded bg-blue-200 dark:bg-blue-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-3xl bg-white text-black">
                  {10}
                </div>
                <p className="text-2xl text-gray-700 dark:text-gray-700">
                  leave Request
                </p>
              </div>
            </Link>
            <Link to="/jobrank">
              <div className="flex flex-col gap-[10px] items-center justify-center h-[120px] rounded bg-blue-200 dark:bg-blue-300 ">
                <div className="flex items-center justify-center w-10 h-10 rounded-3xl bg-white text-black">
                  {10}
                </div>
                <p className="text-2xl text-gray-700 dark:text-gray-700">
                  Job rank request
                </p>
              </div>
            </Link>

            <Link>
              <div className="flex flex-col gap-[10px]  items-center justify-center h-[120px] rounded bg-blue-200 dark:bg-blue-300 ">
                <div className="flex items-center justify-center w-10 h-10 rounded-3xl bg-white text-black">
                  {10}
                </div>
                <p className="text-2xl text-gray-700 dark:text-gray-700">
                  employee request
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mt-[100px]">
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-100">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus numquam illum beatae, tempore ipsum consequatur labore
                velit provident dicta reiciendis laboriosam ad esse culpa
                distinctio odit. Amet iusto quos cum?
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-100">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-100">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-100">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-100">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-100">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-100">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-100">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-100">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-100">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HRofficerMain;
