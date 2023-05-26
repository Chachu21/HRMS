import React from "react";
import Request from "./Request";

const RequestResult = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row">
        <Request
          request={"Employee Requsitions"}
          count={2}
          requestText={"requested"}
          bgColor={"blue-400"} //todo
          className="md:w-1/2 md:pr-2"
        />
        <Request
          request={"Job Rank Requests"}
          count={1}
          requestText={"requested by employee"}
          bgColor={"blue-400"}
          className="md:w-1/2 md:pl-2"
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <Request
          request={"Leave Requests"}
          count={0}
          requestText={"requested by employees"}
          bgColor={"blue-400"}
          className="md:w-1/2 md:pr-2"
        />
        <Request
          request={"Permission"}
          count={3}
          requestText={"requested by employees"}
          bgColor={"blue-400"}
          className="md:w-1/2 md:pl-2"
        />
      </div>
      <div class="bg-gray-200 p-4 text-white text-center mt-20">
        <p>&copy; 2023 HRMS. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default RequestResult;
