import React from 'react'
import LoginCustomizedDialogs from '../landingPage/LoginCustomizedDialogs';
const VacancyCard = ({title, quantity, department, term, sex, designation, cgpa}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 rounded-lg bg-[#f7f7f7]">
      <div className="flex flex-col justify-left items-left gap-5 py-5">
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">Title</span> :
          {title}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">quantity</span> :
          {quantity}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">Department</span> :
          {department}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">
            Term Of Employment :
          </span>{" "}
          {term}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">Sex</span> : {sex}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">Designation</span> :
          {designation}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">min-CGPA</span> :
          {cgpa}
        </p>
      </div>
      <div className=" text-center text-white bg-blue-500 w-[120px] p-2 rounded-md mb-3">
        <button>
          <LoginCustomizedDialogs />
        </button>
      </div>
    </div>
  );
}

export default VacancyCard