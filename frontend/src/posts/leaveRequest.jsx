import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LeaveRequest = () => {
  const [reason, setReason] = useState("");
  const [cv, setCv] = useState("");
  const status = "Pending";

  const navigete = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const staff_id = user.staff_id;
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    const employee = async () => {
      const response =  await axios.get(
        `http://localhost:5002/api/v1/staff/${staff_id}`
      );
      setEmployeeData(response.data);
    };
    employee();
  }, [staff_id]);

  const department_id = employeeData.department_id;
  const handleChande = (event) => {
    setReason(event.target.value);
  };
  const handleCv = (e) => {
    const file = e.target.files[0];
    setCv(file);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("reason", reason);
    formData.append("staff_id", staff_id);
    formData.append("status", status);
    formData.append("cv", cv);
    formData.append("department_id", department_id);

    try {
      const response = await axios.post(
        "http://localhost:5002/api/v1/leave_request",
        formData
      );

      navigete("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex ml-0 lg:ml-[18%] flex-col -mt-[20px] fixed items-center justify-center">
      <div className="flex flex-col justify-center items-center mx-auto my-10 bg-gray-100 ">
        <h1 className="text-3xl mb-4">Request For Leave</h1>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col items-center bg-white p-5"
        >
          <p className="mb-4">
            Before you request leave, please finish clearance!
          </p>
          <div className="flex items-center w-full mb-4">
            <label for="reason" className="w-1/4 mr-2">
              Reason
            </label>
            <textarea
              onChange={handleChande}
              name="reason"
              id="reason"
              value={reason}
              cols="60"
              rows="7"
              className="w-3/4 border border-gray-300 outline-none pl-5 pt-5"
            ></textarea>
          </div>
          <div className="flex items-center w-full mb-4 ">
            <label htmlfor="file" className="w-1/4 mr-2">
              Upload your clearance
            </label>
            <input
              onChange={handleCv}
              type="file"
              name="cv"
              id="file"
              className=" h-9 w-3/4 border border-gray-300 outline-none pl-5 rounded"
            />
          </div>
          <div className="flex justify-center w-full gap-5 mt-10">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveRequest;
