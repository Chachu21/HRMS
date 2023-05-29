import React, { useState } from "react";

const JobVacancyAnnouncement = () => {
  const [formData, setFormData] = useState({
    title: "",
    quantity: null,
    department: "",
    term: "",
    qualification: "",
    sex: "",
    designation: "",
    cgpa: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO:handle the logic
  };

// const handleClear = () => {
//      title= " ",
//     quantity= null,
//     department= " ",
//     term= " ",
//     qualification=" ",
//     sex=" ",
//     designation=" ",
//     cgpa=null,
//  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Job Vacancy Announcement</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="jobTitle" className="text-gray-700 font-bold mb-2">
              Job Title:
            </label>
            <input
              id="jobTitle"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
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
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <label
              htmlFor="department"
              className="text-gray-700 font-bold mb-2"
            >
              Department:
            </label>
            <input
              id="department"
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
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
              name="term"
              value={formData.term}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex gap-5">
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
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sexFile" className="text-gray-700 font-bold mb-2">
              Sex:
            </label>
            <input
              id="sexFile"
              type="text"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <label
              htmlFor="desinationFile"
              className="text-gray-700 font-bold mb-2"
            >
              Designation:
            </label>
            <input
              id="desinationFile"
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cgpa" className="text-gray-700 font-bold mb-2">
              CGPA:
            </label>
            <input
              id="cgpa"
              type="number"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
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
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobVacancyAnnouncement;
