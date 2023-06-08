import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const EmployeeRequistion = () => {
  const [formData, setFormData] = useState({
    job_title: "",
    quantity: null,
    qualification: false,
    cgpa: null,
  });
  const navigete = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const staff_id = user.staff_id;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5002/api/v1/employee_requistion",
        { ...formData, staff_id }
      );

      navigete("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <section className="bg-gray-100 overflow-hidden w-full flex -mt-[200px]">
        <div className="flex flex-col items-center justify-center px-1 py-8 mx-auto md:h-screen lg:py-0">
          <div className="lg:w-[650px] gap-5 p-6 bg-white rounded-lg shadow dark:border dark:bg-white dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-700">
              Employee Requistion
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5 py-10 flex gap-5 flex-col "
              onSubmit={handleFormSubmit}
            >
              <div className="flex justify-center items-center gap-5 flex-col sm:flex-row">
                {" "}
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="job_title"
                    id="jobTitle"
                    value={formData.job_title}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-600 focus:border-blue-600 block w-[300px] h-8 pl-2 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="enter job title"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-600 focus:border-blue-600 block w-[300px] h-8 pl-2 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="enter amount"
                    required={true}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center gap-5 flex-col sm:flex-row">
                <div>
                  <label
                    htmlFor="cgpa"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                  >
                    Cgpa
                  </label>
                  <input
                    type="float"
                    name="cgpa"
                    id="cgpa"
                    value={formData.cgpa}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-600 focus:border-blue-600 block w-[300px] h-8 pl-2 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="enter cgpa"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="qualification"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                  >
                    Qualification
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    id="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-600 focus:border-blue-600 block w-[300px] h-8 pl-2 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="enter job qualification"
                    required={true}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-[250px]  text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Request Employee
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeRequistion;
