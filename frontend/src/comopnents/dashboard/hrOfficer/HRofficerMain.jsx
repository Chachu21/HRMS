import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HRofficerMain = () => {
  const [leaveRequestCount, setLeaveRequestCount] = useState(0);
  const [jobRankRequestCount, setJobRankRequestCount] = useState(0);
  const [employeeRequestCount, setEmployeeRequestCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const leaveRequestCountResponse = await fetchLeaveRequestCount();
        const jobRankRequestCountResponse = await fetchJobRankRequestCount();
        const employeeRequestCountResponse = await fetchEmployeeRequestCount();

        setLeaveRequestCount(leaveRequestCountResponse);
        setJobRankRequestCount(jobRankRequestCountResponse);
        setEmployeeRequestCount(employeeRequestCountResponse);
      } catch (error) {
        console.log("Error fetching request counts:", error);
      }
    };

    fetchCounts();
  }, []);

  const fetchLeaveRequestCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5002/api/v1/leave_request"
      );
      return response.data.length;
    } catch (error) {
      console.log("Error fetching leave request count:", error);
      return 0;
    }
  };

  const fetchJobRankRequestCount = async () => {
    try {
      const response = await axios.get("http://localhost:5002/api/v1/jobRank");
      return response.data.length;
    } catch (error) {
      console.log("Error fetching job rank request count:", error);
      return 0;
    }
  };

  const fetchEmployeeRequestCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5002/api/v1/employee_requistion"
      );
      return response.data.length;
    } catch (error) {
      console.log("Error fetching employee request count:", error);
      return 0;
    }
  };

  return (
    <>
      <div className="lg:ml-[18%] mt-14 ">
        <div className="flex flex-col justify-center items-center gap-10 border-gray-200 border-solid rounded-md dark:border-gray-300 mt-5">
          <div className="grid grid-cols-3 gap-20 px-24 py-[15px] mb-4 fixed top-[80px] left-auto bg-[#f7f7f7]">
            <Link to="/leaverequest">
              <div className="flex flex-col gap-[10px] w-[250px] items-center justify-center h-[120px] rounded bg-blue-200 dark:bg-blue-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-3xl bg-white text-black">
                  {leaveRequestCount}
                </div>
                <p className="text-2xl text-gray-700 dark:text-gray-700">
                  Leave Request
                </p>
              </div>
            </Link>
            <Link to="/jobrank">
              <div className="flex flex-col gap-[10px] items-center justify-center h-[120px] rounded bg-blue-200 dark:bg-blue-300 ">
                <div className="flex items-center justify-center w-10 h-10 rounded-3xl bg-white text-black">
                  {jobRankRequestCount}
                </div>
                <p className="text-2xl text-gray-700 dark:text-gray-700">
                  Job Rank Request
                </p>
              </div>
            </Link>
            <Link to="/employeerequest">
              <div className="flex flex-col gap-[10px] items-center justify-center h-[120px] rounded bg-blue-200 dark:bg-blue-300 ">
                <div className="flex items-center justify-center w-10 h-10 rounded-3xl bg-white text-black">
                  {employeeRequestCount}
                </div>
                <p className="text-2xl text-gray-700 dark:text-gray-700">
                  Employee Request
                </p>
              </div>
            </Link>
          </div>
          {/* Rest of your JSX code */}
        </div>
      </div>
    </>
  );
};

export default HRofficerMain;
