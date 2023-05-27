import React from 'react'

const AdminCard = ({request, amount, color}) => {
  return (
    <div className="flex items-center flex-col justify-center h-24 rounded-xl bg-gray-200">
      <div className={`${color} w-10 rounded-full h-10 text-center`}>
        <p className="text-2xl text-white font-bold ">{amount}</p>
      </div>
      <span className="font-normal text-gray-700">{request}</span>
    </div>
  );
}

export default AdminCard