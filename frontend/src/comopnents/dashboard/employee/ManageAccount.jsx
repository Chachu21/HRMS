import React, { useState, useEffect } from "react";
import axios from "axios";
import {useSelector} from 'react-redux'
function ManageEmployeeAccount() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [jobRanks, setJobRanks] = useState([]);
  const user = useSelector((state) => state.auth.user)
  const staff_id = user.staff_id
  console.log("staff id chale");
  console.log(staff_id)

  useEffect(() => {
    axios
      .get(`http://localhost:5002/api/v1/leave_request?staff_id=${staff_id}`)
      .then((response) => {
        setLeaveRequests(response.data);
      })
      .catch((error) => console.error("Error:", error));

    axios
      .get(`http://localhost:5002/api/v1/permission?staff_id=${staff_id}`)
      .then((response) => {
        setPermissions(response.data);
      })
      .catch((error) => console.error("Error:", error));

    axios
      .get(`http://localhost:5002/api/v1/job_rank?staff_id=${staff_id}`)
      .then((response) => {
        setJobRanks(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, [staff_id]);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col mb-16 ml-[22%] w-full mt-5">
        <h1 className="text-2xl font-bold mb-4">Leave Requests</h1>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Staff ID</th>
                <th className="px-4 py-2">Reason</th>
                <th className="px-4 py-2">Clearance</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.staff_id}</td>
                  <td className="border px-4 py-2">{item.reason}</td>
                  <td className="border px-4 py-2">{item.clearance}</td>
                  <td
                    className={`border px-4 py-2 ${
                      item.status === "Pending"
                        ? "text-yellow-500"
                        : item.status === "Approved"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col mb-16 ml-[22%] w-full mt-5">
        <h1 className="text-2xl font-bold mb-4">Permissions</h1>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Staff ID</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.staff_id}</td>
                  <td className="border px-4 py-2">{item.type}</td>
                  <td
                    className={`border px-4 py-2 ${
                      item.status === "Pending"
                        ? "text-yellow-500"
                        : item.status === "Approved"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col ml-[22%] w-full mt-5">
        <h1 className="text-2xl font-bold mb-4">Job Ranks</h1>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Staff Id</th>
                <th className="px-4 py-2">Level</th>
                <th className="px-4 py-2">Cv</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobRanks.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.staff_id}</td>
                  <td className="border px-4 py-2">{item.level}</td>
                  <td className="border px-4 py-2">{item.cv}</td>
                  <td className="border px-4 py-2">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageEmployeeAccount;
