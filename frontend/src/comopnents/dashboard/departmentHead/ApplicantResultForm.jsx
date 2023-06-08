import React, { useState } from "react";
import axios from "axios";

const ApplicantResultForm = () => {
  const [applicantId, setApplicantId] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to handle form submission goes here
    axios.post("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto ">
      <div className="mb-4">
        <label
          htmlFor="applicantId"
          className="block text-gray-700 font-bold mb-2 mt-8"
        >
          Applicant ID:
        </label>
        <input
          id="applicantId"
          type="number"
          value={applicantId}
          onChange={(event) => setApplicantId(event.target.value)}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="result" className="block text-gray-700 font-bold mb-2">
          Result:
        </label>
        <input
          id="result"
          type="number"
          value={result}
          onChange={(event) => setResult(event.target.value)}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ApplicantResultForm;
