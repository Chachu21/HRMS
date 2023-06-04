import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LeaveRequest = () => {
  const [reason, setstate] = useState("");
  const [clearance, setClearance] = useState("");

  const navigete = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleChande = (event) => {
    setstate(event.target.value);
  };
  const handleClearanceChange = (e) => {
    setClearance(e.target.files[0]);
  };
  console.log(clearance);
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const newFormData = new FormData();
  //   newFormData.append("reason", reason);
  //   if (clearance) {
  //     newFormData.append("clearance", clearance);
  //   }

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5002/api/v1/leave_request",
  //       newFormData 
  //     );

  //     navigete("/");
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newFormData = new FormData();
    newFormData.append("staff_id", user.id); // Add the staff_id
    newFormData.append("reason", reason);
    if (clearance) {
      newFormData.append("clearance", clearance);
    }
  
    try {
      const response = await axios.post(
        "http://localhost:5002/api/v1/leave_request",
        newFormData
      );
  
      navigete("/");
    } catch (err) {
      console.log(err.message);
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
          <div className="flex items-center w-full mb-4">
            <label for="file" className="w-1/4 mr-2">
              Upload your clearance
            </label>
            <input
              onChange={handleClearanceChange}
              type="file"
              name="clearance"
              id="file"
              // accept=".png, .jpeg, .jpg"
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

export default LeaveRequest;
