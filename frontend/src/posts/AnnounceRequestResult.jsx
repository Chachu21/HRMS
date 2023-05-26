import React from "react";
import Request from "./Request";

const AnnounceRequestResult = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <div class="flex justify-between text-green-200 shadow-inner rounded p-3 m-10 md:m-10 bg-green-600 w-1/2">
        <p class="self-center">
          <strong>Welcome </strong>Yilkal Kefale from department.
        </p>
        <strong class="text-xl align-center cursor-pointer alert-del">
          &times;
        </strong>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <Request
          request={"job rank"}
          count={
            "your job upgrade request get some response for more information vist job rank page"
          }
          requestText={"are requested by this department"}
          bgColor={"blue-400"}
          className="md:w-1/2 md:pr-2"
        />
        <Request
          request={"permission"}
          count={
            "nothing done on permission if you want to ask permission visit permission page"
          }
          requestText={""}
          bgColor={"blue-400"}
          className="md:w-1/2 md:pl-2"
        />
      </div>
      <div className="flex w-half">
        <Request
          request={"leave"}
          count={
            "nothing done on leave operation if you want to ask for leave visit leave page"
          }
          requestText={""}
          bgColor={"blue-400"}
          className="md:w-1/2 md:pr-2"
        />
      </div>
    </div>
  );
};

export default AnnounceRequestResult;
