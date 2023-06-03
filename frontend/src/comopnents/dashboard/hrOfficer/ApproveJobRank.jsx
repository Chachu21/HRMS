import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  const handleApprove = (index) => {
    const updatedData = [...rankData];
    updatedData[index].status = "Approved";
    setRankData(updatedData);
  };

  const handleReject = (index) => {
    const updatedData = [...rankData];
    updatedData[index].status = "Rejected";
    setRankData(updatedData);
  };

  return (
    <div className="flex flex-col ml-[18%]">
      <h1 className="text-2xl font-bold mb-4">Approve Request of rank</h1>
      <div className="flex justify-center items-center px-5">
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">StaffId</th>
              <th className="px-4 py-2">Level</th>
              <th className="px-4 py-2">Cv</th>
              <th className="px-4 py-2 w-auto">Action</th>
            </tr>
          </thead>
          <tbody className="overflow-x-hidden">
            {rankData.map((rank, index) => {
              return (
                <tr key={index} className="bg-gray-100/{0-4}">
                  <td className="border px-4 py-2">{rank.staff_id}</td>
                  <td className="border px-4 py-2">{rank.level}</td>
                  <td className="border px-4 py-2">{rank.cv}</td>

                  <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                    {rank.status !== "Approved" && rank.status !== "Rejected" && (
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
                        onClick={() => handleApprove(index)}
                      >
                        Approve
                      </button>
                    )}

                    {rank.status !== "Approved" && rank.status !== "Rejected" && (
                      <button
                        className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
                        onClick={() => handleReject(index)}
                      >
                        Reject
                      </button>
                    )}

                    {rank.status === "Approved" && (
                      <span className="text-green-500">Approved</span>
                    )}
                    {rank.status === "Rejected" && (
                      <span className="text-red-500">Rejected</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveJobRank;
