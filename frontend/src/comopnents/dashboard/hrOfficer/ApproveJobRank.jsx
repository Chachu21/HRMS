import React, { useState, useEffect } from "react";
import axios from "axios";

const ApproveJobRank = () => {
  const [rankData, setRankData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/v1/jobRank")
      .then((response) => {
        setRankData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col ml-[20%] mr-[1%]">
      <h1 className="text-2xl font-bold mb-4">Approve Request of rank</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">StaffId</th>
            <th className="px-4 py-2 text-left">Level</th>
            <th className="px-4 py-2 text-left">Cv</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {rankData.map((rank) => (
            <tr key={rank.id} className="border border-gray-400">
              <td className="px-4 py-2">{rank.staffId}</td>
              <td className="px-4 py-2">{rank.level}</td>
              <td className="px-4 py-2">{rank.cv}</td>
              <td className="px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  approve
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  reject
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
