import React, { useState } from "react";
import axios from "axios";

const ApplicantResultForm = () => {
  const [applicantId, setApplicantId] = useState("");
   const [vacancyTitle, setVacancyTitle] = useState("");
  const [result, setResult] = useState("");

 const handleSubmit = async (event) => {
   event.preventDefault();
   console.log("applicant id payload is :", applicantId);

   try {
     const response = await axios.post("http://localhost:5002/api/v1/result", {
       applicantId,
       result,
       vacancyTitle,
     });

   } catch (err) {
     console.log(err.message);
   }
 };


 //we have to create Vacancyt_title column on result database
  return (
    <form onSubmit={handleSubmit} className="  w-[28%] ml-[30%] mt-[10%] ">
      <div className="mb-4  ">
        <label
          htmlFor="applicantId"
          className="block text-gray-700 font-bold mb-2 mt-9 "
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
      <div className="mb-4">
        <label
          htmlFor="vacancyTitile"
          className="block text-gray-700 font-bold mb-2 mt-8"
        >
          vacancy Title :
        </label>
        <input
          id="vacancyTitile"
          type="text"
          value={vacancyTitle}
          onChange={(event) => setVacancyTitle(event.target.value)}
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
