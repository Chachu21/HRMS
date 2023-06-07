import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequestJobRank = () => {
const [level, setLevel] = useState("");
  const [cv, setCv] = useState("");

  const navigete = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const staff_id = user.staff_id;
  const status = "Pending";

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCv(file);
  };
 const handleClick = () => {
   setCv("");
   setLevel("");
 };

 const handleChande = (event) => {
   const { value } = event.target;
   setLevel(value);
 };
  const handleSubmit = async (event) => {
    event.preventDefault();
 const formData = new FormData()

 formData.append("staff_id", staff_id)
 formData.append("level", level)
 formData.append("status", status)
 formData.append("cv", cv)
    try {
      await axios.post("http://localhost:5002/api/v1/job_rank", formData);

      navigete("/");
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
          className="flex flex-col items-center bg-white m-3 p-10 pt-10 gap-5 "
        >
          <div className="flex items-center w-full mb-4 ">
            <label htmlFor="level" className="w-1/4 mr-4">
              level
            </label>
            <select
              onChange={handleChande}
              name="level"
              id="level"
              className="w-3/4 rounded outline-none h-8 focus:ring-2 focus:border-transparent focus:ring-blue-300"
              value={level}
            >
              <option value="rank 0">rank 0</option>
              <option value="rank 1">rank 1</option>
              <option value="rank 2">rank 2</option>
            </select>
          </div>
          <div className="flex items-center w-full mb-4 gap-3">
            <label htmlfor="clearance" className="w-1/4 mr-2">
              Attachment cv
            </label>
            <input
              onChange={handleImageChange}
              type="file"
              name="cv"
              id="clearance"
              className="w-3/4 rounded outline-none h-8 bg-gray-100 focus:ring-2 focus:border-transparent focus:ring-blue-300"
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
