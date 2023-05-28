import axios from "axios";
import React, { useState,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import VacancyCard from "../comopnents/card/VaccancyCard";

const initialState = {
  searchQuery: "",
};


const Vacancy = () => {
  const [state, setstate] = useState([]);
  const [formData, setFormData] = useState(initialState);
//  useEffect(() => {
//   const response = axios.get(
//     "http://localhost:5002/api/v1/applicant/vacancies"
//   );
  
//  }, [])

//  setstate() accepts data from redux to fetch vacancies data using response
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search is done");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 py-5 h-full">
      <div className="flex items-center justify-center rounded-[5px]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center fixed justify-center mr-52  -mt-[107px]  z-20 "
        >
          <input
            id="search"
            name="search"
            value={formData.searchQuery}
            onChange={(e) => {
              setFormData({ ...formData, searchQuery: e.target.value });
            }}
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
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
      </div>
    </div>
  );
};

export default Vacancy;
