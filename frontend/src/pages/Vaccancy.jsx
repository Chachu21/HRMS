import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import VaccancyCard from "../comopnents/card/VaccancyCard";

const initialState = {
  searchQuery: "",
};

const Vaccancy = () => {

   const [formData, setFormData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search is done");
  };
  return (
    <div className="flex flex-col  items-center justify-center gap-10 py-5">
      <div className="flex items-center rounded-[5px]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center"
        >
          <input
            id="search"
            name="search"
            value={formData.searchQuery}
            onChange={(e) => {
              setFormData({ ...formData, searchQuery: e.target.value });
            }}
            type="text"
            className="bg-gray-100 w-[250px] outline-none border-2 border-gray-300 pl-3 lg:w-[350px] h-10 rounded-[5px] placeholder:text-[18px] leading-4 font-normal"
            placeholder="search here...."
          />
          <button
            type="submit"
            className="bg-blue-400 h-10 flex px-[14px] justify-center items-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer"
          >
            <FaSearch color="white" />
          </button>
        </form>
      </div>
<div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 bg-gray-200 p-5">
<VaccancyCard />
<VaccancyCard />
<VaccancyCard />
<VaccancyCard />
<VaccancyCard />
<VaccancyCard />
<VaccancyCard />
</div>
    </div>
  );
};

export default Vaccancy;
