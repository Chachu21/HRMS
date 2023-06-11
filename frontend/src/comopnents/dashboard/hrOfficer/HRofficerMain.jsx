import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import background from '../../../assets/hr.jpg'

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
      const response = await axios.get("http://localhost:5002/api/v1/job_rank");
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
    <div
      className="lg:ml-[18%] ml-0 w-full mt-[70px] h-screen"
      style={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(50%)",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-20 border-gray-200 border-solid rounded-md dark:border-gray-300 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 py-4 md:py-8 lg:py-12">
          <Link to="/hrofficer/dashboard/leaverequest">
            <div className="flex flex-col gap-2 items-center justify-center h-[120px] rounded bg-blue-200 dark:bg-blue-300 hover:scale-105">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
                {leaveRequestCount}
              </div>
              <p className="text-2xl text-gray-700 dark:text-gray-700">
                Leave Request
              </p>
            </div>
          </Link>
          <Link to="/hrofficer/dashboard/approvejobrank">
            <div className="flex flex-col gap-2 items-center justify-center h-[120px] rounded bg-blue-200 dark:bg-blue-300 hover:scale-105">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
                {jobRankRequestCount}
              </div>
              <p className="text-2xl text-gray-700 dark:text-gray-700">
                Job Rank Request
              </p>
            </div>
          </Link>
          <Link to="/hrofficer/dashboard/viewemployeerequistion">
            <div className="flex flex-col gap-2 items-center justify-center h-[120px] rounded bg-blue-200 dark:bg-blue-300 hover:scale-105">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
                {employeeRequestCount}
              </div>
              <p className="text-2xl text-gray-700 dark:text-gray-700">
                Employee Request
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HRofficerMain;
