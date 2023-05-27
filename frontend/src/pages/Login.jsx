import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  setLoggedIn,
  resetLogin,
  setRememberMe,
} from "../redux/reducers/loginReducer";
import { loginUser } from "../api/loginApi";
import { setError } from "../redux/reducers/applicant/applicantRegisterReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { response } from "express";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const error = useSelector((state) => state.login.error);
  const rememberMe = useSelector((state) => state.login.rememberMe);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetLogin()); // Clear login form after displaying the error
    }
  }, [error, dispatch]);

  useEffect(() => {
    // Check if the Remember Me value exists in local storage
    const rememberMeValue = localStorage.getItem("rememberMe");
    if (rememberMeValue) {
      dispatch(setRememberMe(true)); // Set the Remember Me state to true
    }
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "email") {
      dispatch(setEmail(value));
    } else if (name === "password") {
      dispatch(setPassword(value));
    } else if (name === "rememberMe" && checked === true) {
      dispatch(setRememberMe(true)); // Update the Remember Me state based on the checkbox value
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
 const response= await loginUser(email, password);

      dispatch(setLoggedIn(true));
      if (loggedIn) {
        if (rememberMe) {

          localStorage.setItem("rememberMe", "true"); // Store Remember Me value in local storage
        } else {
          localStorage.removeItem("rememberMe"); // Remove Remember Me value from local storage
        }
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  return (
    <div className="bg-gray-100 h-[100vh] flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col">
        <span className="text-[#11d4bd] italic font-bold text-[24px]">
          HR Management System
        </span>
        <div>
          <span className="text-black text-[24px] font-bold">
            Sign in to your account
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center bg-white rounded-lg text-black shadow-xl p-14">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex justify-center flex-col items-center w-full gap-8 px-4"
        >
          <div className="flex justify-start items-left flex-col gap-[10px]  ">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter your email address"
              className="w-[350px] h-8 bg-white border-2 pl-[10px] rounded-md border-gray-300 outline-none"
            />
          </div>
          <div className="flex justify-start items-left flex-col gap-[10px]  ">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={password}
              onChange={handleChange}
              autoComplete="false"
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-[350px] h-8 pl-[10px] bg-white border-2 rounded-md border-gray-300 outline-none  "
            />
          </div>
          <div className="flex justify-between items-center gap-[90px]">
            <div className="flex gap-3 items-center justify-start">
              <input
                type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </div>
            <div>
              <Link to="/forgotPassword" className="text-blue-400">
                Forgot password ?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-[350px] bg-blue-700 h-8 text-center rounded-md text-white hover:bg-blue-500"
            >
              Login
            </button>
          </div>
          <div>
            <span>Don't have an account?</span>
            <Link to="/signUpASapplicant" className="text-blue-500">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
