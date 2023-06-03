import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchVacancyType } from "../redux/reducers/post/vacancyReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplyCustomizedDialogs from "../comopnents/card/ApplyCustomizedDialogs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/reducers/loginReducer";

const Vacancy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const vacancyType = useSelector((state) => state.vacancy.vacancyType);
  const loading = useSelector((state) => state.vacancy.loading);
  const error = useSelector((state) => state.vacancy.error);
  const [queries, setQueries] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchVacancyType());
  }, [dispatch]);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     const parsedUser = JSON.parse(storedUser);
  //     dispatch(loginSuccess(parsedUser));
  //   }
  // }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = vacancyType.filter((data) =>
      data.title.toLowerCase().includes(queries.toLowerCase())
    );

    if (filteredData.length === 0) {
      toast.info("No results found");
    }

    setFilteredData(filteredData);
  };

  const handleApply = async (id, title) => {
    if (!user) {
      navigate("/login");
    } else {
      try {
        // Check if the user has already applied for the job
        const response = await axios.get(
          `http://localhost:5002/api/v1/lists?applicant_id=${user.applicant_id}&vacancy_id=${id}`
        );
        const existingApplications = response.data;
        console.log(existingApplications);

        if (existingApplications.length > 0) {
          // Check if the existing applications contain the current job
          const hasExistingApplication = existingApplications.some(
            (application) => application.vacancy_id === id
          );

          if (hasExistingApplication) {
            // Display an error message or handle the duplicate application
            toast.error("You have already applied for this job");
          } else {
            // Insert the application into the table
            const response = await axios.post(
              "http://localhost:5002/api/v1/lists",
              {
                applicant_id: user.applicant_id,
                applicant_email: user.email,
                vacancy_title: title,
                vacancy_id: id,
              }
            );
            console.log(response.data);
          }
        } else {
          // Insert the application into the table
          const response = await axios.post(
            "http://localhost:5002/api/v1/lists",
            {
              applicant_id: user.applicant_id,
              applicant_email: user.email,
              vacancy_title: title,
              vacancy_id: id,
            }
          );
          console.log(response.data);
        }
      } catch (error) {
        // Display an error message if the request fails
        toast.error("Error applying for the job");
        console.log(error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
      <div className="flex items-center justify-center rounded-[5px]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center fixed justify-center lg:mr-60 ml-28 lg:-ml-20 -mt-[65px] z-20 "
        >
          <input
            id="search"
            name="search"
            value={queries}
            onChange={(e) => setQueries(e.target.value)}
            type="text"
            className="bg-gray-100 w- outline-none border-2 border-gray-300 pl-3 lg:w-[350px] h-8 lg:h-10 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-[18px] leading-4 font-normal "
            placeholder="search here...."
          />
          <button
            type="submit"
            className="bg-blue-400 h-8 lg:h-10 flex px-[14px] justify-center items-center rounded-tr-[10px] rounded-br-[10px] cursor-pointer"
          >
            <FaSearch color="white" />
          </button>
        </form>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 px-5 lg:gap-10  max-h-96 w-full ">
        {(filteredData.length > 0 ? filteredData : vacancyType).map(
          (vacacny) => {
            return (
              <div
                key={vacacny.id}
                className="flex flex-col justify-center items-center gap-5 hover:scale-105  transition duration-300 ease-in-out rounded-lg bg-[#f7f7f7]"
              >
                <div className="flex flex-col justify-left items-left gap-5 py-5">
                  <p className="text-lg">
                    <span className="text-lg font-bold text-gray-700">
                      Title
                    </span>{" "}
                    :{vacacny.title}
                  </p>
                  <p className="text-lg">
                    <span className="text-lg font-bold text-gray-700">
                      quantity
                    </span>{" "}
                    :{vacacny.quantity}
                  </p>
                  <p className="text-lg">
                    <span className="text-lg font-bold text-gray-700">
                      Department
                    </span>{" "}
                    :{vacacny.department}
                  </p>
                  <p className="text-lg">
                    <span className="text-lg font-bold text-gray-700">
                      Term Of Employment :
                    </span>{" "}
                    {vacacny.terms}
                  </p>
                  <p className="text-lg">
                    <span className="text-lg font-bold text-gray-700">Sex</span>{" "}
                    : {vacacny.sex}
                  </p>
                  <p className="text-lg">
                    <span className="text-lg font-bold text-gray-700">
                      Designation
                    </span>{" "}
                    :{vacacny.designation}
                  </p>
                  <p className="text-lg">
                    <span className="text-lg font-bold text-gray-700">
                      min-CGPA
                    </span>{" "}
                    :{vacacny.cgpa}
                  </p>
                </div>
                {user ? (
                  <div className="text-center text-white bg-blue-500 w-[120px] p-2 rounded-md mb-3">
                    <button
                      onClick={() => handleApply(vacacny.id, vacacny.title)}
                    >
                      Apply
                    </button>
                  </div>
                ) : (
                  <div className="text-center text-white bg-blue-500 w-[120px] p-2 rounded-md mb-3 opacity-50 cursor-not-allowed">
                    <ApplyCustomizedDialogs />
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Vacancy;
