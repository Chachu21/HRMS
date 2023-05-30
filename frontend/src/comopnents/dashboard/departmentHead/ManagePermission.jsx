import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ManagePermission = () => {
  const [permissionData, setPermissionData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5002/permission")
      .then((response) => {
        setPermissionData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleForward = (id) => {
    navigate(`/leave-request/${id}`); // Replace with your desired route
  };

  return (
    <div className="flex flex-col ml-[20%] mr-[1%]">
      <h1 className="text-2xl font-bold mb-4">Permission requests</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Reason</th>
            <th className="px-4 py-2 text-left">Start Date</th>
            <th className="px-4 py-2 text-left">Return Date</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {permissionData.map((permission) => (
            <tr key={permission.id} className="border border-gray-400">
              <td className="px-4 py-2">{permission.name}</td>
              <td className="px-4 py-2">{permission.type}</td>
              <td className="px-4 py-2">{permission.reason}</td>
              <td className="px-4 py-2">{permission.start_date}</td>
              <td className="px-4 py-2">{permission.return_date}</td>
              <td className="px-4 py-2">{permission.status}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleForward(permission.id)}
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

export default ManagePermission;
