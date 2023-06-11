import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { quantity } from "../../../redux/reducers/loginReducer";

const ApproveEmployeeRequistion = () => {
  const [emplyeeRequistionData, setEmplyeeRequistionData] = useState([]);

  const dispatch = useDispatch();
  const count = emplyeeRequistionData.length;
  const status = "Forwarded";
  useEffect(() => {
    axios
      .get(`http://localhost:5002/api/v1/employee_requistion/status/${status}`)
      .then((response) => {
        setEmplyeeRequistionData(response.data);
        dispatch(quantity(count));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleApprove = (index) => {
    const updatedData = [...emplyeeRequistionData];
    if (updatedData[index].status === "Forwarded") {
      updatedData[index].status = "Approved";
    }
    setEmplyeeRequistionData(updatedData);
    const id = emplyeeRequistionData[index].id;
    const buttonType = "approve"; // Set the buttonType to "approve"

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

  const handleReject = (index) => {
    const updatedData = [...emplyeeRequistionData];
    if (updatedData[index].status === "Forwarded") {
      updatedData[index].status = "Rejected";
    }
    setEmplyeeRequistionData(updatedData);

    const id = emplyeeRequistionData[index].id;
    const buttonType = "reject"; // Set the buttonType to "reject"

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
    <div className="flex flex-col justify-start items-start bg-white ml-0 lg:ml-[18%]">
      <h1 className="text-2xl font-bold mt-8 mb-4">
        Approve Employee Requistion
      </h1>
      <div className="flex justify-center items-center ">
        <table className="">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">staff ID</th>
              <th className="px-4 py-2">job Title</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">CGPA</th>
              <th className="px-4 py-2">Qualification</th>
              <th className="px-4 py-2 w-auto">Action</th>
              <th className="px-4 py-2 w-auto">Status</th>
            </tr>
          </thead>
          <tbody className="overflow-x-hidden">
            {emplyeeRequistionData.map((employeeRequistion, index) => {
              return (
                <tr key={index} className="bg-gray-100/{0-4} ">
                  <td className="border px-4 py-2">
                    {employeeRequistion.staff_id}
                  </td>
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
                    {employeeRequistion.qualification
                      ? "Qualified"
                      : "unQualified"}
                  </td>

                  <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                    {employeeRequistion.status !== "Approved" &&
                      employeeRequistion.status !== "Rejected" && (
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
                          onClick={() => handleApprove(index)}
                        >
                          Approve
                        </button>
                      )}

                    {employeeRequistion.status !== "Approved" &&
                      employeeRequistion.status !== "Rejected" && (
                        <button
                          className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
                          onClick={() => handleReject(index)}
                        >
                          Reject
                        </button>
                      )}

                    {employeeRequistion.status === "Approved" && (
                      <span className="text-green-500">Approved</span>
                    )}
                    {employeeRequistion.status === "Rejected" && (
                      <span className="text-red-500">Rejected</span>
                    )}
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

export default ApproveEmployeeRequistion;
