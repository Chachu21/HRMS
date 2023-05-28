import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import VacancyCard from "../comopnents/card/VaccancyCard";

const initialState = {
  searchQuery: "",
};

const Vacancy = () => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search is done");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 py-5 h-full">
      <div className="flex items-center rounded-[5px]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center fixed mt-8 ml-auto"
        >
          <input
            id="search"
            name="search"
            value={formData.searchQuery}
            onChange={(e) => {
              setFormData({ ...formData, searchQuery: e.target.value });
            }}
            type="text"
            className="bg-gray-100 w- outline-none border-2 border-gray-300 pl-3 lg:w-[350px] h-12 rounded-2xl placeholder:text-[18px] leading-4 font-normal "
            placeholder="search here...."
          />
          <button
            type="submit"
            className="bg-blue-400 h-12 flex px-[14px] justify-center items-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer"
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
