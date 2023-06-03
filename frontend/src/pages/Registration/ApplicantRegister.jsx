import React, { useState } from "react";
import axios from "axios";

const ApplicantRegister = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone_number: "",
    password: "",
    email: "",
  });

  const [cv, setCv] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCvChange = (e) => {
    setCv(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFormData = new FormData();
    newFormData.append("fname", formData.fname);
    newFormData.append("lname", formData.lname);
    newFormData.append("phone_number", formData.phone_number);
    newFormData.append("password", formData.password);
    newFormData.append("email", formData.email);
    if (cv) {
      newFormData.append("cv", cv);
    }
    try {
      const response = await axios.post(
        "http://localhost:5002/api/v1/applicant/register",
        newFormData
      );
      console.log(response);
      // Handle success case...
    } catch (error) {
      console.log(error);
      // Handle error case...
    }
  };

  return (
    <div>
      <div className="shadow-xl">
        <h3 className="text-xl font-bold text-blue-400">
          Register for accessing provided service
        </h3>
      </div>
      <div className="w-[100vw] flex flex-col px-3 py-4 mt-6 overflow-hidden bg-gray-100 shadow-md border-t-gray-400 sm:max-w-lg sm:rounded-lg">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-5">
            <div className="mt-4">
              <label
                htmlFor="fname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={formData.fname}
                  onChange={handleChange}
                  id="fname"
                  type="text"
                  name="fname"
                  className="block w-full mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="lname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={formData.lname}
                  onChange={handleChange}
                  id="lname"
                  type="text"
                  name="lname"
                  className="block w-full mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5">
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required={true}
                  name="email"
                  className="block w-full mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={formData.phone_number}
                  onChange={handleChange}
                  id="phone"
                  type="tel"
                  name="phone_number"
                  className="block w-full mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5">
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="false"
                  type="password"
                  name="password"
                  className="block w-full mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700"
              >
                Add CV
              </label>
              <div className="flex flex-col items-start">
                <input
                  id="file"
                  type="file"
                  onChange={handleCvChange}
                  name="cv"
                  className="block w-full mt-1 border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-12">
            <button className="w-1/2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantRegister;
