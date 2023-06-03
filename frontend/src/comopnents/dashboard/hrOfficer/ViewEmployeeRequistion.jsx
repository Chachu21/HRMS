import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ViewEmployeeRequistion = () => {
  const [employeeRequistionData, setEmployeeRequistionData] = useState([]);
  //const navigate = useNavigate();
  const isApproved = useSelector((state) => state.auth.isApproved);
  console.log(isApproved);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/v1/employee_requistion")
      .then((response) => {
        setEmployeeRequistionData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const handleForward = (id) => {
  //   navigate(`/leave-request/${id}`); // Replace with your desired route
  // };

  return (
    <div className="flex flex-col ml-[20%] mr-[1%]">
      <h1 className="text-2xl font-bold mb-4">Employee Requistion</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Job Title</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Qualification</th>
            <th className="px-4 py-2 text-left">CGPA</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeRequistionData.map((employeeRequistion) => (
            <tr key={employeeRequistion.id} className="border border-gray-400">
              <td className="px-4 py-2">{employeeRequistion.job_title}</td>
              <td className="px-4 py-2">{employeeRequistion.quantity}</td>
              <td className="px-4 py-2">{employeeRequistion.qualification}</td>
              <td className="px-4 py-2">{employeeRequistion.cgpa}</td>
              <td className="px-4 py-2">
                {isApproved ? (
                  <button
                    className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => handleForward(employeeRequistion.id)}
                  >
                    Approved
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => handleForward(employeeRequistion.id)}
                  >
                    Forward
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployeeRequistion;
