import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormData,
  setError,
  setRegistrationStatus,
  resetRegistration,
} from "../../redux/reducers/staff/staffRegisterReducer";
import { staffRegister } from "../../api/staffApi";

const StaffRegisterForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.staffRegister.formData);
  const registrationStatus = useSelector(
    (state) => state.aplicantRegister.registrationStatus
  );
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the name is "role" and parse the value as a number
    const parsedValue = name === "role" ? parseInt(value) : value;

    dispatch(setFormData({ ...formData, [name]: parsedValue }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    console.log(Object.fromEntries(formDataToSend)); // Display form data on the console
    console.log(formData.role_id);
    try {
      const response = await staffRegister(formData);
      console.log(response);
      dispatch(setRegistrationStatus(true)); // Dispatch action to update registration status in Redux store
      // ... handle success case ...
      if (registrationStatus) {
        dispatch(resetRegistration(formData));
      }
    } catch (error) {
      dispatch(setError(error.message)); // Dispatch action to update error in Redux store
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
        <div className="shadow-xl">
          <h3 className="text-xl font-bold text-blue-400">Register staffs</h3>
        </div>
        <div className="w-[100vw] flex flex-col px-6 py-4 mt-5 overflow-hidden bg-gray-50 shadow-md border-t-gray-400 sm:max-w-lg sm:rounded-lg">
          <form className="" onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="id"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                ID Of Staff
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={formData.id}
                  onChange={handleChange}
                  id="id"
                  type="text"
                  name="id"
                  className="block w-[350px] mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
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
                  className="block w-[350px] mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                  className="block w-[350px] mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex justify-start items-left flex-col gap-[10px]">
              <label htmlFor="role_id">Role</label>
              <select
                value={formData.role_id}
                name="role_id" 
                id="role_id"
                onChange={handleChange}
                className="w-[350px] h-8 bg-white border-2 pl-[10px] rounded-md border-gray-300 outline-none"
              >
                <option value="">select role</option>
                <option value={3}>Dep't Head</option>
                <option value={4}>HR Officer</option>
                <option value={5}>Employee</option>
              </select>
            </div>

            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Eamil
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required={true}
                  id="email"
                  name="email"
                  className="block w-[350px] mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                  className="block w-[350px] mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                  className="block w-[350px] mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="flex items-end justify-end  mt-4">
              <button className="w-[120px] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                Register
              </button>
            </div>
          </form>
          {/* <div className="mt-4 text-grey-600 mb-10">
            Already have an account?{" "}
            <span>
              <Link to="/login" className="text-blue-400 hover:underline">
                Login
              </Link>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default StaffRegisterForm;
