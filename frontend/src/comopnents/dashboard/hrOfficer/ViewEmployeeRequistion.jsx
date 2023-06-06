import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewEmployeeRequistion = () => {
  const [employeeRequistionData, setEmployeeRequistionData] = useState([]);
  //const navigate = useNavigate();

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

  const handleForward = async (index) => {
    const updatedData = [...employeeRequistionData];
    if (updatedData[index].status === "Pending") {
      updatedData[index].status = "Forwarded";
    }
    setEmployeeRequistionData(updatedData);
    const id = employeeRequistionData[index].id;
    const buttonType = "forward"; // Set the buttonType to "approve"
    axios
      .put(`http://localhost:5002/api/v1/employee_requistion/${id}`, {
        buttonType,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col lg:ml-[20%] mr-[1%] mt-[7%] ml-2 ">
      <h1 className="text-2xl font-bold mb-4 ml-[30%]">Employee Requistion</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Job Title</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Qualification</th>
            <th className="px-4 py-2 text-left">CGPA</th>
            <th className="px-4 py-2 text-left">Action</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {employeeRequistionData.map((employeeRequistion, index) => (
            <tr key={employeeRequistion.id} className="border border-gray-400">
              <td className="px-4 py-2">{employeeRequistion.job_title}</td>
              <td className="px-4 py-2">{employeeRequistion.quantity}</td>
              <td className="px-4 py-2">{employeeRequistion.qualification}</td>
              <td className="px-4 py-2">{employeeRequistion.cgpa}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleForward(index)}
                >
                  Forward
                </button>
              </td>
              <td className="px-4 py-2">{employeeRequistion.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployeeRequistion;
