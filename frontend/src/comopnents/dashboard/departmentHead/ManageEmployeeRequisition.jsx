import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageEmployeeRequisition = () => {
  const [emplyeeRequistionData, setEmplyeeRequistionData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:5002/api/v1/employee_requistion/staff/${user.staff_id}`)
      .then((response) => {
        setEmplyeeRequistionData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user.staff_id]);

  return (
    <div className="flex flex-col justify-start px-2 items-start ml-0 lg:ml-[18%]">
      <h1 className="text-2xl font-bold mb-4">Approve Employee Requistion</h1>
      <div className="flex justify-center items-center ">
        <table className="">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">job Title</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">CGPA</th>
              <th className="px-4 py-2">Qualification</th>
              <th className="px-4 py-2 w-auto">Status</th>
            </tr>
          </thead>
          <tbody className="overflow-x-hidden">
            {emplyeeRequistionData.map((employeeRequistion, index) => {
              return (
                <tr key={index} className="bg-gray-100/{0-4} ">
                  <td className="border px-4 py-2">
                    {employeeRequistion.job_title}
                  </td>
                  <td className="border px-4 py-2">
                    {employeeRequistion.quantity}
                  </td>
                  <td className="border px-4 py-2">
                    {employeeRequistion.cgpa}
                  </td>
                  <td className="border px-4 py-2">
                    {employeeRequistion.qualification ? "true" : "false"}
                  </td>
                  <td className="border px-4 py-2">
                    {employeeRequistion.status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEmployeeRequisition;
