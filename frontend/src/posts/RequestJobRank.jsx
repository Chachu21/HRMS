import axios from "axios";
import React, { useState } from "react";

const RequestJobRank = () => {
  const [state, setstate] = useState({
    staff_id: null,
    level: "",
    cv: "",
  });

  const handleClick = () => {
    setstate({
      staff_id: null,
      level: "",
      cv: "",
    });
  };

  const handleChande = (event) => {
    const { name, value } = event.target;
    setstate((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:5002/api/v1/job_rank", state);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto my-10 gap-5 bg-gray-100 h-[100vh]">
        <h1 className="text-3xl mb-4">Request Job Rank</h1>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col items-center bg-white m-3 p-10 pt-10 gap-5"
        >
          <div className="flex items-center w-full mb-4">
            <label for="staff_id" className="w-1/4 mr-2">
              staff_id
            </label>
            <input
              onChange={handleChande}
              name="staff_id"
              id="staff_id"
              value={state.staff_id}
              className="w-3/4 border border-gray-300 outline-none rounded pl-5"
            ></input>
          </div>
          <div className="flex items-center w-full mb-4">
            <label htmlFor="level" className="w-1/4 mr-4">
              level
            </label>
            <select
              onChange={handleChande}
              name="level"
              value={state.level}
              id="level"
              className="w-3/4 rounded outline-none"
            >
              <option value="rank 0"> rank 0</option>
              <option value="rank 1"> rank 1</option>
              <option value="rank 2"> rank 2</option>
            </select>
          </div>
          <div className="flex items-center w-full mb-4 gap-3">
            <label htmlfor="clearance" className="w-1/4 mr-2">
              Attachment(CV)
            </label>
            <input
              onChange={handleChande}
              type="file"
              name="clearance"
              id="clearance"
              value={state.cv}
              accept="image/png, image/jpeg, image/jpg"
              className="w-3/4"
            />
          </div>
          <div className="flex justify-center w-full gap-7 mt-10 mb-10">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Submit
            </button>
            <button
              onClick={handleClick}
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

export default RequestJobRank;
