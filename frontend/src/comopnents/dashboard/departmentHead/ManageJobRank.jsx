import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageJobRank = () => {
  const [jobRankData, setJobRankData] = useState([]);
  const [deptHeadData, setDeptHeadData] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const department_id = deptHeadData.department_id;
  console.log(department_id);
  useEffect(() => {
    axios
      .get(`http://localhost:5002/api/v1/staff/${user.staff_id}`)
      .then((response) => {
        setDeptHeadData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user.staff_id]);

  console.log(user);
  useEffect(() => {
    axios
      .get(`http://localhost:5002/api/v1/job_rank/department/${department_id}`)
      .then((response) => {
        setJobRankData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [department_id]);

  const handleForward = async (index) => {
    const updatedData = [...jobRankData];
    if (updatedData[index].status === "Pending") {
      updatedData[index].status = "Forwarded";
    }
    setJobRankData(updatedData);
    const id = jobRankData[index].id;
    const buttonType = "forward"; // Set the buttonType to "approve"
    axios
      .put(`http://localhost:5002/api/v1/job_rank/${id}`, {
        buttonType,
      })
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDownload = (cv) => {
    const downloadLink = `http://localhost:5002/uploads/${cv}`;
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = cv;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex lg:ml-[20%] lg:mr-[1%] ml-0 py-3 flex-col">
      <h1 className="text-2xl font-bold mb-4 py-3">Job Rank Requests</h1>
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
              {rank.cv && rank.cv.endsWith(".pdf") ? (
                <a
                  href={`http://localhost:5002/uploads/${rank.cv}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download PDF
                </a>
              ) : (
                rank.cv && (
                  <div>
                    <a
                      href={`http://localhost:5002/uploads/${rank.cv}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Image
                    </a>
                    <button
                      className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded lg:ml-2"
                      onClick={() => handleDownload(rank.cv)}
                    >
                      Download
                    </button>
                  </div>
                )
              )}
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
