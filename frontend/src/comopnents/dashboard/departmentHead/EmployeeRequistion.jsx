import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeRequistion = () => {
  const [leaveRequestData, setLeaveRequestData] = useState([]);
  const navigate = useNavigate();

  const handleForward = (id) => {
    navigate(`/leave-request/${id}`); // Replace with your desired route
  };

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/v1/leaverequest")
      .then((response) => {
        setLeaveRequestData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //   const handleForward = (id) => {
  //     history.push(`/leave-request/${id}`); // Replace with your desired route
  //   };

  return (
    <div className="flex flex-col ml-[20%] mr-[1%]">
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
                  onClick={() => handleForward(request.id)}
                >
                  Forward
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeRequistion;
