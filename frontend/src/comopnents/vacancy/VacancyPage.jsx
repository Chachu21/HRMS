import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const JobVacancyAnnouncement = () => {
  const [formData, setFormData] = useState({
    title: "",
    quantity: null,
    department_id: "",
    terms: "",
    qualification: null,
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
      department_id: "",
      terms: "",
      qualification: "",
      sex: "",
      designation: "",
      cgpa: "",
    });
    toast.warning(" data is cleared successfuly");
  };

  return (
    <div className="ml-0 flex lg:ml-[18%] pt-[100px] overflow-x-hidden bg-gray-200 w-screen h-screen flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold mb-4">Job Vacancy Announcement</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white px-4 py-5  flex gap-5 flex-col">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              className="focus:ring-2 focus:border-transparent focus:ring-blue-300  shadow appearance-none border rounded w-[350px]  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="focus:ring-2 focus:border-transparent focus:ring-blue-300  shadow appearance-none border rounded w-[350px]  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex justify-start items-left flex-col gap-[6px]">
            <label
              htmlFor="department_id"
              className="text-gray-700 font-bold "
            >
              Department
            </label>
            <select
              value={formData.department_id}
              name="department_id"
              id="department_id"
              onChange={handleChange}
              className="w-[350px] h-8 bg-white border-2 pl-[10px] rounded-md border-gray-300 outline-none"
            >
              <option value="">select department</option>
              <option value={1}>It</option>
              <option value={2}>mechanical</option>
              <option value={3}>Tourism</option>
              <option value={4}>Economics</option>
            </select>
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
              className=" focus:ring-2 focus:border-transparent focus:ring-blue-300  shadow appearance-none border rounded w-[350px]  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              className="focus:ring-2 focus:border-transparent focus:ring-blue-300  shadow appearance-none border rounded w-[350px]  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="focus:ring-2 focus:border-transparent focus:ring-blue-300  shadow appearance-none border rounded w-[350px]  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              className="focus:ring-2 focus:border-transparent focus:ring-blue-300  shadow appearance-none border rounded w-[350px]  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="focus:ring-2 focus:border-transparent focus:ring-blue-300  shadow appearance-none border rounded w-[350px]  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            onClick={handleClear}
            type="button"
            className="bg-red-400 hover:bg-gray-500 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Clear
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default JobVacancyAnnouncement;