import React, { useState, useEffect } from "react";
import axios from "axios";
import { set } from "mongoose";

const LeaveRequests = () => {
  const [leaveRequestData, setLeaveRequestData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/v1/leave_request")
      .then((response) => {
        console.log(response.data);
        setLeaveRequestData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleApprove = (index) => {
    const updatedData = [...leaveRequestData];
    updatedData[index].status = "Approved";
    setLeaveRequestData(updatedData);
    const id = leaveRequestData[index].id;

    const buttonType = "approve"; // Set the buttonType to "approve"

    axios
      .put(`http://localhost:5002/api/v1/leave_request/${id}`, buttonType)
      .then((response) => {
        console.log(response.data);
        console.log("muller sucess");
      })
      .catch((error) => {
        console.log("natiniel error");
        console.error(error.message);
      });
  };

  const handleReject = (index) => {
    const updatedData = [...leaveRequestData];
    updatedData[index].status = "Rejected";

    setLeaveRequestData(updatedData);

    const id = leaveRequestData[index].id;
    const buttonType = "reject"; // Set the buttonType to "reject"

    axios
      .put(`http://localhost:5002/api/v1/leave_request/${id}`, buttonType)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        console.log(`id: ${id}, buttonType: ${buttonType}`);
      });
  };
  return (
    <div className="flex flex-col w-full focus:ring-2 focus:border-transparent focus:ring-blue-300 lg:ml-[20%] mr-[1%] mt-[7%]">
      <h1 className="text-2xl font-bold mb-4 ml-[30%]">Leave Request</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Staff ID</th>
            <th className="px-4 py-2 text-left">Reason</th>
            <th className="px-4 py-2 text-left">Clearance</th>
            <th className="px-4-4 py-2 text-left">Action</th>
            <th className="px-4-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequestData.map((request, index) => (
            <tr key={request.id} className="border border-gray-400">
              <td className="px-4 py-2">{request.staff_id}</td>
              <td className="px-4 py-2">{request.reason}</td>
              <td className="px-4 py-2">{request.clearance}</td>
              <td className="px-4 py-2">
                {request.status !== "Approved" &&
                  request.status !== "Rejected" && (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
                      onClick={() => handleApprove(index)}
                    >
                      Approve
                    </button>
                  )}

                {request.status !== "Approved" &&
                  request.status !== "Rejected" && (
                    <button
                      className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
                      onClick={() => handleReject(index)}
                    >
                      Reject
                    </button>
                  )}

                {request.status === "Approved" && (
                  <span className="text-green-500">Approved</span>
                )}
                {request.status === "Rejected" && (
                  <span className="text-red-500">Rejected</span>
                )}
              </td>
              <td className="px-4 py-2">{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequests;
