import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ManagePermission = () => {
  const [permissionData, setPermissionData] = useState([]);
  const [deptHeadData, setDeptHeadData] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const department_id = deptHeadData.department_id;
  console.log(department_id);
  useEffect(() => {
    axios
      .get(`http://localhost:5002/api/v1/staff/${user.staff_id}`)
      .then((response) => {
        setDeptHeadData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user.staff_id]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5002/api/v1/permission/department/${department_id}`
      )
      .then((response) => {
        setPermissionData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [department_id]);

  const handleApprove = (index) => {
    const updatedData = [...permissionData];
    updatedData[index].status = "Approved";
    setPermissionData(updatedData);
    const id = permissionData[index].id;
    const buttonType = "approve"; // Set the buttonType to "approve"

    axios
      .put(`http://localhost:5002/api/v1/permission/${id}`, { buttonType })
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReject = (index) => {
    const updatedData = [...permissionData];
    updatedData[index].status = "Rejected";
    setPermissionData(updatedData);

    const id = permissionData[index].id;
    const buttonType = "reject"; // Set the buttonType to "reject"

    axios
      .put(`http://localhost:5002/api/v1/permission/${id}`, { buttonType })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex mr-[1%] lg:ml-[20%] flex-col mt-20">
      <h1 className="text-2xl font-bold mb-4 ml-[30%] ">Permission requests</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Reason</th>
            <th className="px-4 py-2 text-left">Start Date</th>
            <th className="px-4 py-2 text-left">Return Date</th>
            <th className="px-4 py-2 text-left">Action</th>
            {/* <th className="px-4 py-2 text-left">Status</th> */}
          </tr>
        </thead>
        <tbody>
          {permissionData.map((permission, index) => (
            <tr key={permission.id} className="border border-gray-400">
              <td className="px-4 py-2">{permission.name}</td>
              <td className="px-4 py-2">{permission.type}</td>
              <td className="px-4 py-2">{permission.reason}</td>
              <td className="px-4 py-2">{permission.start_date}</td>
              <td className="px-4 py-2">{permission.return_date}</td>
              <td className="px-4 py-2">
                {permission.status !== "Approved" &&
                  permission.status !== "Rejected" && (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
                      onClick={() => handleApprove(index)}
                    >
                      Approve
                    </button>
                  )}

                {permission.status !== "Approved" &&
                  permission.status !== "Rejected" && (
                    <button
                      className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
                      onClick={() => handleReject(index)}
                    >
                      Reject
                    </button>
                  )}

                {permission.status === "Approved" && (
                  <span className="text-green-500">Approved</span>
                )}
                {permission.status === "Rejected" && (
                  <span className="text-red-500">Rejected</span>
                )}
              </td>
              {/* <td className="px-4 py-2">{permission.status}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePermission;
