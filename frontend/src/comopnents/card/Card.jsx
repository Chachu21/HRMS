import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-5 bg-gray-200 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-lg font-normal px-10 text-slate-700">{content}</p>
    </div>
  );
};

export default Card;
