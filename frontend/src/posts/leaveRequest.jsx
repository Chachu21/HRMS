import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LeaveRequest = () => {
  const [state, setstate] = useState({
    reason: "",
    clearance: "",
  });

  const navigete = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const staff_id = user.staff_id;

  const handleChande = (event) => {
    const { name, value } = event.target;
    setstate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5002/api/v1/leave_request",
        { ...state, staff_id }
      );

      navigete("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex ml-[26%] flex-col -mt-[20px] fixed">
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
              value={state.reason}
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
              onChange={handleChande}
              type="file"
              value={state.clearance}
              name="clearance"
              id="file"
              // accept=".png, .jpeg, .jpg"
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
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    </div>
  );
};

export default LeaveRequest;
