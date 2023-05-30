import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import VacancyCard from "../comopnents/card/VaccancyCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchVacancyType } from "../redux/reducers/post/vacancyReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Vacancy = () => {
  const dispatch = useDispatch();
  const vacancyType = useSelector((state) => state.vacancy.vacancyType);
  const loading = useSelector((state) => state.vacancy.loading);
  const error = useSelector((state) => state.vacancy.error);
  const [queries, setQueries] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(fetchVacancyType());
  }, [dispatch]);

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
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10 py-5 h-full">
      <div className="flex items-center justify-center rounded-[5px]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center fixed justify-center lg:mr-52 ml-48  lg:ml-0  -mt-[107px]  z-20 "
        >
          <input
            id="search"
            name="search"
            value={queries}
            onChange={(e) => setQueries(e.target.value)}
            type="text"
            className="bg-gray-100 w- outline-none border-2 border-gray-300 pl-3 lg:w-[350px] h-10 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-[18px] leading-4 font-normal "
            placeholder="search here...."
          />
          <button
            type="submit"
            className="bg-blue-400 h-10 flex px-[14px] justify-center items-center rounded-tr-[10px] rounded-br-[10px] cursor-pointer"
          >
            <FaSearch color="white" />
          </button>
        </form>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 bg-gray-200 p-5  max-h-96 w-full ">
        {(filteredData.length > 0 ? filteredData : vacancyType).map(
          (vacacny) => {
            return (
              <VacancyCard
                key={vacacny.id}
                title={vacacny.title}
                quantity={vacacny.quantity}
                department={vacacny.department}
                term={vacacny.terms}
                sex={vacacny.sex}
                designation={vacacny.designation}
                cgpa={vacacny.cgpa}
              />
            );
          }
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Vacancy;
