import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LeaveRequests = () => {
  const [reason, setReason] = useState("");
  const [clearance, setClearance] = useState(null);

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleClearanceChange = (event) => {
    setClearance(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("staff_id", user.id);
    formData.append("reason", reason);
    if (clearance) {
      formData.append("clearance", clearance);
    }

    try {
      const response = await axios.post(
        "http://localhost:5002/api/v1/leave_request",
        formData
      );

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex ml-[2%] flex-col mt-[10px]">
      <div className="flex flex-col justify-center items-center mx-auto my-10 bg-gray-100 h-[100vh]">
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
            <label htmlFor="reason" className="w-1/4 mr-2">
              Reason
            </label>
            <textarea
              onChange={handleReasonChange}
              name="reason"
              id="reason"
              value={reason}
              cols="60"
              rows="7"
              className="w-3/4 border border-gray-300 outline-none pl-5 pt-5"
            ></textarea>
          </div>
          <div className="flex items-center w-full mb-4">
            <label htmlFor="file" className="w-1/4 mr-2">
              Upload your clearance
            </label>
            <input
              onChange={handleClearanceChange}
              type="file"
              name="clearance"
              id="file"
              className="w-3/4 border border-gray-300 outline-none pl-5 rounded"
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
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    </div>
  );
};

export default LeaveRequests;
