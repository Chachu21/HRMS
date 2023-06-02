import React, { useState, useEffect } from "react";
import axios from "axios";

const LeaveRequests = () => {
  const [leaveRequestData, setLeaveRequestData] = useState([]);

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = () => {
    axios
      .get("http://localhost:5002/api/v1/leave_request")
      .then((response) => {
        setLeaveRequestData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleApprove = (id) => {
    axios
      .delete(`http://localhost:5002/api/v1/leave_request/delete/${id}`)
      .then((response) => {
        console.log("Employee removed successfully");
        fetchLeaveRequests(); // Fetch updated leave requests after removal
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col ml-[3%] mr-[1%]">
      <h1 className="text-2xl font-bold mb-4">Leave Request</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Staff ID</th>
            <th className="px-4 py-2 text-left">Reason</th>
            <th className="px-4 py-2 text-left">Clearance</th>
            <th className="px-4-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequestData.map((request) => (
            <tr key={request.id} className="border border-gray-400">
              <td className="px-4 py-2">{request.staff_id}</td>
              <td className="px-4 py-2">{request.reason}</td>
              <td className="px-4 py-2">{request.clearance}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleApprove(request.id)}
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequests;
