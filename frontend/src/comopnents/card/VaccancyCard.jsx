import React from 'react'
import { Link } from 'react-router-dom';

const VaccancyCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 rounded-md bg-gray-300">
      <div className="flex flex-col justify-left items-left gap-5">
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">Title</span> :
          Lecturer
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">quantity</span> :
          10
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">Department</span> :
          software Engineering
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">
            Term Of Employment
          </span>{" "}
          : full time
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">Sex</span> : female
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">Designation</span>{" "}
          : Degree
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold text-gray-700">min-CGPA</span> :
          3.5
        </p>
      </div>
      <div className=" text-center text-white bg-blue-500 w-[120px] p-2 rounded-md mb-3">
        <Link >Apply</Link>
      </div>
    </div>
  );
}

export default VaccancyCard