import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPhoneNumber,
  setPassword,
  setConfirmPassword,
  resetPasswordRequest,
  setAcceptTerms,
} from "../redux/reducers/loginReducer";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);
  const password = useSelector((state) => state.auth.password);
  const confirmPassword = useSelector((state) => state.auth.confirmPassword);
  const acceptTerms = useSelector((state) => state.auth.acceptTerms);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform validation and dispatch resetPasswordRequest action
    dispatch(resetPasswordRequest());
    // Other logic...
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    dispatch(setPhoneNumber(value));
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    dispatch(setPassword(value));
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    dispatch(setConfirmPassword(value));
  };
  const handleAcceptTermschange = (e) => {
    const { value } = e.target;
    dispatch(setAcceptTerms(value));
  };

  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-white dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-700">
              Change Password
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              action="#"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label
                  htmlFor="phoneId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                >
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phoneId"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+251**********"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="acceptTerms"
                    aria-describedby="acceptTerms"
                    type="checkbox"
                    name="acceptTerms"
                    checked={acceptTerms}
                    onChange={handleAcceptTermschange}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required={true}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="newsletter"
                    className="font-light text-gray-800 dark:text-gray-800"
                  >
                    I accept the{" "}
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      to="/term_condition"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              {/* {error && <div className="text-red-500">{error}</div>} */}
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Reset passwod
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
