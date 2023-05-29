import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  resetLogin,
  setRememberMe,
} from "../redux/reducers/loginReducer";
import { loginUser } from "../api/loginApi";
import { setError } from "../redux/reducers/applicant/applicantRegisterReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomizedDialogs from "../comopnents/landingPage/BootstrapingDialog";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);
  // const loggedIn = useSelector((state) => state.login.loggedIn);
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
    const response = await loginUser(email, password);
    const { user, token } =  response
    if(token !=null ){

      localStorage.setItem("token", token);
      const role_id = user.role_id;
      switch (role_id) {
        case 1:
          navigate("/admin/dashboard");
          break;
        case 2:
          navigate("/applicant/dashboard");
          break;
        case 3:
          navigate("/employee/dashboard");
          break;
        case 4:
          navigate("/hrofficer/dashboard");
          break;
        case 5:
          navigate("/depthead/dashboard");
          break;
        default:
          navigate("/");
          break;

      }
    } else {
      dispatch(setError(response.message));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

  return (
    <div className="bg-gray-100 h-[40%] w-[500px] flex flex-col items-center justify-center gap-1">
      <div>
        <span className="text-black text-[24px]">Sign in to your account</span>
      </div>

      <div className="flex justify-center items-center bg-white rounded-lg text-black shadow-xl p-14">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex justify-center flex-col items-center w-full gap-4 px-4 -mt-10"
        >
          <div className="flex justify-start items-left flex-col gap-[10px]  ">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter your email address"
              className="w-[350px] h-8  bg-white border-2 pl-[10px] rounded-md border-gray-300 outline-none"
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
          <div className="flex justify-between items-center gap-[120px]">
            <div className="flex gap-1 items-center justify-start">
              <input
                type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={handleChange}
              />
              <span className="text-sm">Remember me</span>
            </div>
            <div>
              <Link to="/forgotPassword" className="text-blue-400 text-sm">
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
          <div className="flex gap-2 justify-center items-center">
            <span className="text-md">Don't have an account?</span>
            {/* <Link to="/signup" className="text-blue-500">
              Register
            </Link> */}
            <CustomizedDialogs />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
