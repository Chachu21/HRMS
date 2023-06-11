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
    if (updatedData[index].status === "Forwarded") {
      updatedData[index].status = "Approved";
    }
    setRankData(updatedData);
    const id = rankData[index].id;
    const buttonType = "approve"; // Set the buttonType to "approve"

    axios
      .put(`http://localhost:5002/api/v1/job_rank/${id}`, { buttonType })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReject = (index) => {
    const updatedData = [...rankData];
    if (updatedData[index].status === "Forwarded") {
      updatedData[index].status = "Rejected";
    }
    setRankData(updatedData);

    const id = rankData[index].id;
    const buttonType = "reject"; // Set the buttonType to "reject"

    axios
      .put(`http://localhost:5002/api/v1/job_rank/${id}`, { buttonType })
      .then((response) => {
        console.log(response.data);
      })
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
    <div className="flex flex-col justify-center ranks-center ml-0 lg:ml-[18%]">
      <h1 className="text-2xl font-bold my-4">Approve Request of rank</h1>
      <div className="flex justify-center ranks-center px-5">
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
                  <td className="border px-4 py-2">
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
                  </td>

                  <td className="w-auto flex justify-center ranks-center gap-2 py-2 px-4">
                    {rank.status !== "Approved" &&
                      rank.status !== "Rejected" && (
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
                          onClick={() => handleApprove(index)}
                        >
                          Approve
                        </button>
                      )}

                    {rank.status !== "Approved" &&
                      rank.status !== "Rejected" && (
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
