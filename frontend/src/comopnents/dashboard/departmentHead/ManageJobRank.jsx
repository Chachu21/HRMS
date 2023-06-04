import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ManageJobRank = () => {
  const [jobRankData, setJobRankData] = useState([]);
  const navigate=useNavigate();
  

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/v1/job_rank")
      .then((response) => {
        setJobRankData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


 
const handleForward = async (index) => {
    const updatedData = [...jobRankData];
    if (updatedData[index].status === "Pending"){
       updatedData[index].status = "Forwarded";
    }
    setJobRankData(updatedData);
    const id = jobRankData[index].id;
    const buttonType = "forward"; // Set the buttonType to "approve"
   axios
     .put(`http://localhost:5002/api/v1/job_rank/${id}`, {
       buttonType
     })
     .then((response) => {
       console.log(response.data);
     })
     .catch((error) => {
       console.error(error);
     });
  
};

  return (
    <div className="flex ml-[20%] mr-[1%] flex-col mt-20">
      <h1 className="text-2xl font-bold mb-4">Job Rank Table</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Staff ID</th>
            <th className="px-4 py-2 text-left">Level</th>
            <th className="px-4 py-2 text-left">CV</th>
            <th className="px-4 py-2 text-left">Action</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobRankData.map((rank, index) => (
            <tr key={rank.id} className="border border-gray-400">
              <td className="px-4 py-2">{rank.staff_id}</td>
              <td className="px-4 py-2">{rank.level}</td>
              <td className="px-4 py-2">{rank.cv}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleForward(index)}
                >
                  Forward
                </button>
              </td>
              <td className="px-4 py-2">{rank.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageJobRank;

