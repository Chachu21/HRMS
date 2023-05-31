import axios from "axios";
import React, { useState } from "react";

const RequestPermission = () => {
 const [state, setstate] = useState({
   name: "",
   type: "",
   reason: "",
   start_date: "",
   return_date: "",
   status: "",
   staff_id: null,
 });

  

const handleChande=(event)=>{
  const {name,value}=event.target;
  setstate((prev)=>({...prev,[name]:value})

  )
}

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
       
       const response = await axios.post(
         "http://localhost:5002/api/v1/permission",
        state
       );
    }catch(err){
      console.log(err.message);
    }
   
   
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 rounded-lg p-4 mt-8 w-[500px] h-1/2 ml-96 overflow-y-scroll"
    >
      <h2 className="text-lg font-semibold mb-2">Request Permission</h2>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-1 font-semibold text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChande}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          onChange={handleChande}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          onChange={handleChande}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="startDate" className="mb-1 font-semibold text-gray-600">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="start_date"
          value={state.start_date}
          onChange={handleChande}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          onChange={handleChande}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-1 font-semibold text-gray-600">
          status
        </label>
        <input
          type="text"
          id="status"
          name="status"
          value={state.status}
          onChange={handleChande}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-1 font-semibold text-gray-600">
          staffId
        </label>
        <input
          type="number"
          id="staffId"
          name="staff_id"
          value={state.staff_id}
          onChange={handleChande}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
      >
        Request
      </button>
    </form>
  );
};

export default RequestPermission;

