import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const JobVacancyAnnouncement = () => {
  const [formData, setFormData] = useState({
    title: "",
    quantity: null,
    department: "",
    terms: "",
    qualification: null,
    sex: "",
    desgination: "",
    cgpa: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("first");
    try {
      const response = await axios.post(
        "http://localhost:5002/api/v1/vacancy",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    toast.info("Announcement data is added successfuly");
    console.log("first");
  };

  const handleClear = () => {
    setFormData({
      title: "",
      quantity: "",
      department: "",
      terms: "",
      qualification: "",
      sex: "",
      desgination: "",
      cgpa: "",
    });
    toast.warning(" data is cleared successfuly");
  };

  return (
    <div className="max-w-md  flex ml-[18%] flex-col mt-20">
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
              name="terms"
              value={formData.terms}
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
              name="desgination"
              value={formData.desgination}
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
          {/* <button
            onClick={handleClear}
            type="button"
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Clear
          </button> */}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default JobVacancyAnnouncement;
