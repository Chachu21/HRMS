import React, { useState, useEffect } from "react";
import axios from "axios";

const ApproveLeave = () => {
  const [leaveData, setLeaveData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/v1/leave_request")
      .then((response) => {
        console.log(response.data)
        setLeaveData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleApprove = (index) => {
    const updatedData = [...leaveData];
    updatedData[index].status = "Approved";

    setLeaveData(updatedData);
    const id = leaveData[index].id;
    const buttonType = "approve"; // Set the buttonType to "approve"

    axios
      .put(`http://localhost:5002/api/v1/leave_request/${id}`, { buttonType })
      .then((response) => {
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReject = (index) => {
    const updatedData = [...leaveData];
    updatedData[index].status = "Rejected";
    setLeaveData(updatedData);

    const id = leaveData[index].id;
    const buttonType = "reject"; // Set the buttonType to "reject"

    axios
      .put(`http://localhost:5002/api/v1/leave_request/${id}`, { buttonType })
      .then((response) => {
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDownload = (clearance) => {
    const downloadLink = `http://localhost:5002/uploads/${clearance}`;
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = clearance;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col ml-[20%] mr-[1%] ">
      <h1 className="text-2xl font-bold mb-4">Approve Request of leave</h1>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">StaffId</th>
            <th className="px-4 py-2 text-left">Reason</th>
            <th className="px-4 py-2 text-left">Clearance</th>
            <th className="px-4 py-2 text-left">Action</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveData.map((leave, index) => (
            <tr key={leave.id} className="border border-gray-400">
              <td className="px-4 py-2">{leave.staffId}</td>
              <td className="px-4 py-2">{leave.reason}</td>
              <td className="px-4 py-2">
                {leave.clearance && leave.clearance.endsWith(".pdf") ? (
                  <a
                    href={`http://localhost:5002/uploads/${leave.clearance}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Download PDF
                  </a>
                ) : (
                  leave.clearance && (
                    <div>
                      <a
                        href={`http://localhost:5002/uploads/${leave.clearance}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Image
                      </a>
                      <button
                        className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded lg:ml-2"
                        onClick={() => handleDownload(leave.clearance)}
                      >
                        Download
                      </button>
                    </div>
                  )
                )}
              </td>
              <td className="px-4 py-2">
                {leave.status !== "Approved" && leave.status !== "Rejected" && (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
                    onClick={() => handleApprove(index)}
                  >
                    Approve
                  </button>
                )}

                {leave.status !== "Approved" && leave.status !== "Rejected" && (
                  <button
                    className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
                    onClick={() => handleReject(index)}
                  >
                    Reject
                  </button>
                )}

                {leave.status === "Approved" && (
                  <span className="text-green-500">Approved</span>
                )}
                {leave.status === "Rejected" && (
                  <span className="text-red-500">Rejected</span>
                )}
              </td>
              <td className="px-4 py-2">{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveLeave;
