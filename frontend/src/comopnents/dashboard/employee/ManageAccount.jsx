import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

function ManageEmployeeAccount() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [jobRanks, setJobRanks] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const staff_id = user.staff_id;

  useEffect(() => {
    axios
      .get(`http://localhost:5002/api/v1/leave_request/leave/${staff_id}`)
      .then((response) => {
        setLeaveRequests(response.data);
      })
      .catch((error) => console.error("Error:", error));

    axios
      .get(`http://localhost:5002/api/v1/permission/permission/${staff_id}`)
      .then((response) => {
        setPermissions(response.data);
      })
      .catch((error) => console.error("Error:", error));

    axios
      .get(`http://localhost:5002/api/v1/job_rank/job/${staff_id}`)
      .then((response) => {
        setJobRanks(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, [staff_id]);

  const options = [
    { value: "leaveRequests", label: "Leave Requests" },
    { value: "permissions", label: "Permissions" },
    { value: "jobRanks", label: "Job Ranks" },
  ];

  const handleSelectChange = (selectedOption) => {
    setSelectedTable(selectedOption.value);
  };

  let table = null;
  if (selectedTable === "leaveRequests") {
    table = (
      <div className="overflow-x-auto lg:ml-[18%] ml-[0%] text-md">
        {" "}
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Staff ID</th>
              <th className="px-4 py-2">Reason</th>
              <th className="px-4 py-2">Clearance</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.staff_id}</td>
                <td className="border px-4 py-2">{item.reason}</td>
                <td className="border px-4 py-2">
                  {item.clearance && item.clearance.endsWith(".pdf") ? (
                    <a
                      href={`http://localhost:5002/uploads/${item.clearance}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Download PDF
                    </a>
                  ) : (
                    item.clearance && (
                      <div>
                        <a
                          href={`http://localhost:5002/uploads/${item.clearance}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Image
                        </a>
                        <button
                          className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded lg:ml-2"
                          onClick={() => handleDownload(item.clearance)}
                        >
                          Download
                        </button>
                      </div>
                    )
                  )}
                </td>
                <td
                  className={`border px-4 py-2 ${
                    item.status === "Pending"
                      ? "text-yellow-500"
                      : item.status === "Approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (selectedTable === "permissions") {
    table = (
      <div className="overflow-x-auto ml-[22%] ">
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Staff ID</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.staff_id}</td>
                <td className="border px-4 py-2">{item.type}</td>
                <td
                  className={`border px-4 py-2 ${
                    item.status === "Pending"
                      ? "text-yellow-500"
                      : item.status === "Approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (selectedTable === "jobRanks") {
    table = (
      <div className="overflow-x-auto lg:ml-[18%] ml-0 ">
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Staff ID</th>
              <th className="px-4 py-2">Level</th>
              <th className="px-4 py-2">CV</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobRanks.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.staff_id}</td>
                <td className="border px-4 py-2">{item.level}</td>
                <td className="border px-4 py-2">
                  {item.cv && item.cv.endsWith(".pdf") ? (
                    <a
                      href={`http://localhost:5002/uploads/${item.cv}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Download PDF
                    </a>
                  ) : (
                    item.cv && (
                      <div>
                        <a
                          href={`http://localhost:5002/uploads/${item.cv}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Image
                        </a>
                        <button
                          className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded lg:ml-2"
                          onClick={() => handleDownload(item.cv)}
                        >
                          Download
                        </button>
                      </div>
                    )
                  )}
                </td>
                <td className="border px-4 py-2">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

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
    <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-center justify-between mb-4 ml-[22%] mt-5 mr-2 gap-2">
        <div className="w-64 ">
          <Select
            options={options}
            value={selectedTable}
            onChange={handleSelectChange}
            placeholder="Select a table"
          />
        </div>
        <h1 className="lg:text-2xl text-md font-bold mb-4 mt-6">
          Manage Employee Account
        </h1>
      </div>

      {table}
    </div>
  );
}

export default ManageEmployeeAccount;
