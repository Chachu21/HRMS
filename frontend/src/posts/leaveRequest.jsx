import React from "react";

const LeaveRequest = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto my-10 bg-gray-100 h-[100vh]">
        <h1 className="text-3xl mb-4">Request For Leave</h1>
        <form action="" className="flex flex-col items-center">
          <p className="mb-4">
            Before you request leave, please finish clearance!
          </p>
          <div className="flex items-center w-full mb-4">
            <label for="requestreview" className="w-1/4 mr-2">
              Reason
            </label>
            <textarea
              name="requestreview"
              id="requestreview"
              cols="60"
              rows="10"
              className="w-3/4 border border-gray-300 outline-none pl-5 pt-5"
            ></textarea>
          </div>
          <div className="flex items-center w-full mb-4">
            <label for="clearancefile" className="w-1/2 mr-2">
              Upload your clearance
            </label>
            <input
              type="file"
              name="clearancefile"
              id="clearancefile"
              accept="image/png, image/jpeg, image/jpg"
              className="w-3/4"
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
