import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequestPermission = () => {
  const [state, setstate] = useState({
    name: "",
    type: "",
    reason: "",
    start_date: "",
    return_date: "",
  });
  const navigete = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const staff_id = user.staff_id;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setstate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5002/api/v1/permission",
        { ...state, staff_id }
      );

      navigete("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 rounded-lg p-4 h-full ml-0 lg:ml-[18%] overflow-y-scroll px-2 lg:px-60  "
    >
      <h2 className=" font-semibold mb-4 ml-28 text-xl">Request Permission</h2>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-1 font-semibold text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
          className="px-3 h-12 py-2 
          rounded-md border border-gray-300 focus:outline-none "
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="type" className="mb-1 font-semibold text-gray-600">
          Type
        </label>
        <select
          id="type"
          name="type"
          value={state.type}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          required
        >
          <option value="">Select a type...</option>
          <option value="Vacation">Vacation</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Personal Leave">Personal Leave</option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="reason" className="mb-1 font-semibold text-gray-600">
          Reason
        </label>
        <textarea
          id="reason"
          name="reason"
          value={state.reason}
          onChange={handleChange}
          className="px-3 h-12 py-2 focus:ring-2 focus:border-transparent focus:ring-blue-300  rounded-md border border-gray-300 focus:outline-none "
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="startDate"
          className="mb-1 font-semibold text-gray-600 "
        >
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="start_date"
          value={state.start_date}
          onChange={handleChange}
          className="px-3 h-12 py-2 focus:ring-2 focus:border-transparent focus:ring-blue-300  rounded-md border border-gray-300 focus:outline-none "
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="returnDate"
          className="mb-1 font-semibold text-gray-600"
        >
          Return Date
        </label>
        <input
          type="date"
          name="return_date"
          id="returnDate"
          value={state.return_date}
          onChange={handleChange}
          className="px-3 h-12 py-2 focus:ring-2 focus:border-transparent focus:ring-blue-300  rounded-md border border-gray-300 focus:outline-none "
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 mt-4 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
      >
        Request
      </button>
    </form>
  );
};

export default RequestPermission;
