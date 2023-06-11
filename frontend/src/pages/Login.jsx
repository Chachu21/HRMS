import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  loginSuccess,
  loginFailure,
  loginStart,
} from "../redux/reducers/loginReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomizedDialogs from "../comopnents/landingPage/BootstrapingDialog";

const Login = () => {
  const [formData, setFormData] = useState(() => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const storedEmail = rememberMe ? localStorage.getItem("email") : "";
    const storedPassword = rememberMe ? localStorage.getItem("password") : "";
    return {
      email: storedEmail,
      password: storedPassword,
      rememberMe,
    };
  });

  const { email, password, rememberMe } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (isLogin && user) {
      localStorage.setItem("user",JSON.stringify(user));
      localStorage.setItem("isLogin", JSON.stringify(isLogin))
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
        case 6:
          navigate("/dean/dashboard");
          break;
        default:
          navigate("/");
          break;
      }
    }
  }, [isLogin, user, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5002/api/v1/login",
        formData
      );

      dispatch(loginStart());
      dispatch(loginSuccess(response.data));
      toast.success("Login successful!");

      // Check if the user has selected "Remember Me"
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("rememberMe");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      // Check if there is state data indicating the user came from the Vacancy page
      if (location.state && location.state.from === "/vacancy") {
        const vacancyId = location.state.vacancyId;
        const vacancyTitle = location.state.vacancyTitle;

        // Redirect the user back to the Vacancy page with the user info
        navigate(`/vacancy/${vacancyId}`, {
          state: { userInfo: response.data, vacancyTitle },
        });
      } else {
        // Redirect the user to the appropriate page
        // ...
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="bg-[#00008B] w-[100%] h-screen flex flex-col items-center justify-center gap-1">
      <div>
        <span className="text-white flex justify-start -ml-16 items-start text-[16px]  lg:justify-center lg:items-center lg:text-[24px]">
          Welcome back !
        </span>
      </div>

      <div className="flex justify-center items-center bg-gray-50 rounded-lg text-black shadow-sm py-20">
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
              className="w-[250px] lg:w-[300px] h-8 text-sm bg-white border-2 pl-[10px] rounded-md border-gray-300 outline-none"
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
              className="lg:w-[300px] w-[250px] h-8 pl-[10px] text-sm bg-white border-2 rounded-md border-gray-300 outline-none  "
            />
          </div>
          <div className="flex justify-between items-center gap-[20px] lg:gap-[70px]">
            <div className="flex gap-1 items-center justify-start">
              <input
                type="checkbox"
                name="rememberMe"
                value="false"
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
              className="w-[250px]  lg:w-[300px] bg-blue-700 h-8 text-center rounded-md text-white hover:bg-blue-500"
            >
              Login
            </button>
          </div>
          <div className="flex gap-1 lg:gap-2 justify-center items-center">
            <span className="text-sm">Don't have an account?</span>
            <CustomizedDialogs text="Sign Up" />
          </div>
        </form>
      </div>
      <ToastContainer autoClose={100} />
    </div>
  );
};

export default Login;
