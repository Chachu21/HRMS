import React from "react";

const Request = (props) => {
  return (
    <div className={`bg-${props.bgColor} p-4 m-4 w-1/4`}>
      <h2 className="text-lg font-bold mb-2">{props.request}</h2>
      <p className="text-xl mb-2">{props.count}</p>
      <p className="text-sm">{props.requestText}</p>
    </div>
  );
};

export default Request;
