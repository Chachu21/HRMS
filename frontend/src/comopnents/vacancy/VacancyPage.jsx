
import React, { useState } from "react";

function JobVacancyAnnouncement() {
  const [jobTitle, setJobTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [department, setDepartment] = useState("");
  const [term, setTerm] = useState("");
  const [qualification, setQualification] = useState("");
  const [sexFile, setSexFile] = useState("");
  const [desinationFile, setDesinationFile] = useState("");
  const [cgpa, setCgpa] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO:handle the logic 
  };

  const handleClear = () => {
    setJobTitle("");
    setQuantity("");
    setDepartment("");
    setTerm("");
    setQualification("");
    setSexFile(null);
    setDesinationFile(null);
    setCgpa("");
  };

  const handleSexFileChange = (event) => {
    setSexFile(event.target.files[0]);
  };

  const handleDesinationFileChange = (event) => {
    setDesinationFile(event.target.files[0]);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Job Vacancy Announcement</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="jobTitle" className="text-gray-700 font-bold mb-2">
            Job Title:
          </label>
          <input
            id="jobTitle"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity" className="text-gray-700 font-bold mb-2">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="department" className="text-gray-700 font-bold mb-2">
            Department:
          </label>
          <input
            id="department"
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="term" className="text-gray-700 font-bold mb-2">
            Term of Employment:
          </label>
          <input
            id="term"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="qualification"
            className="text-gray-700 font-bold mb-2"
          >
            Qualification:
          </label>
          <input
            id="qualification"
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="sexFile" className="text-gray-700 font-bold mb-2">
            Sex:
          </label>
          <input
            id="sexFile"
            type="file"
            onChange={handleSexFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="desinationFile"
            className="text-gray-700 font-bold mb-2"
          >
            Designation:
          </label>
          <input
            id="desinationFile"
            type="file"
            onChange={handleDesinationFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cgpa" className="text-gray-700 font-bold mb-2">
            CGPA:
          </label>
          <input
            id="cgpa"
            type="text"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobVacancyAnnouncement;