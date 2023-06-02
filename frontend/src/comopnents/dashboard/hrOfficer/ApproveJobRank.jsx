import React, { useState, useEffect } from "react";
import axios from "axios";

const ApproveJobRank = () => {
  const [rankData, setRankData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/v1/job_rank")
      .then((response) => {
        setRankData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col ml-[3%] mr-[1%]">
      <h1 className="text-2xl font-bold mb-4">Approve Request of rank</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200 flex justify-between items-center">
            <th className="px-4 py-2 text-left">StaffId</th>
            <th className="px-4 py-2 text-left">Level</th>
            <th className="px-4 py-2 text-left">Cv</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {rankData.map((rank) => (
            <tr
              key={rank.id}
              className="border border-gray-400 flex justify-between"
            >
              <td className="px-4 py-2">{rank.staff_id}</td>
              <td className="px-4 py-2">{rank.level}</td>
              <td className="px-4 py-2">{rank.cv}</td>
              <td className="px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
                  Approve
                </button>
                <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveJobRank;
