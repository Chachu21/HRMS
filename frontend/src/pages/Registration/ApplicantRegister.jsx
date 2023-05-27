import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormData,
  setError,
  setRegistrationStatus,
} from "../../redux/reducers/applicant/applicantRegisterReducer";
import { registerUser } from "../../api/registerApi";

const ApplicantRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.aplicantRegister.formData);
  const registrationStatus = useSelector(
    (state) => state.aplicantRegister.registrationStatus
  );
  const error = useSelector((state) => state.aplicantRegister.error);
  const handleChange = (e) => {
    const { name, value } = e.target;
   
      dispatch(setFormData({ ...formData, [name]: value })); // Use the spread operator to update the specific field
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    console.log(Object.fromEntries(formDataToSend)); // Display form data on the console

    try {
     await registerUser(formData);
      dispatch(setRegistrationStatus(true)); // Dispatch action to update registration status in Redux store
      // ... handle success case ...
      if (registrationStatus) {
        navigate("/login");
      }
    } catch (error) {
      dispatch(setError(error.message)); // Dispatch action to update error in Redux store
      // ... handle error case ...
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
        <div className="shadow-xl">
          <h3 className="text-xl font-bold text-blue-400">
            Register for accessing provide service
          </h3>
        </div>
        {/* {error && (
          <div className="mt-5">
            <p className="text-red-500">{error}</p>
          </div>
        )} */}
        <div className="w-[100vw] flex flex-col px-6 py-4 mt-6 overflow-hidden bg-gray-100 shadow-md border-t-gray-400 sm:max-w-lg sm:rounded-lg">
          <form className="" onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="fname"
                className="block text-sm font-medium text-gray-700 undefined"
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
                className="block text-sm font-medium text-gray-700 undefined"
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
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Eamil
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required="true"
                  name="email"
                  className="block w-full mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Phone_number
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
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
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
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Add cv
              </label>
              <div className="flex flex-col items-start">
                <input
                  id="file"
                  type="text"
                  value={formData.cv}
                  onChange={handleChange} // Add the onChange event handler
                  name="cv"
                  className="block w-full mt-1 border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600 mb-10">
            Already have an account?{" "}
            <span>
              <Link to="/login" className="text-blue-400 hover:underline">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplicantRegister;
