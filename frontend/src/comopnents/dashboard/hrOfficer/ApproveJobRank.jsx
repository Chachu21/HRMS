import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ApproveJobRank = () => {
  const [jobRankRequests, setJobRankRequests] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    fetchJobRankRequests();
  }, []);

  const fetchJobRankRequests = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5002/api/v1/department/${user.departmentId}/job_rank_requests`
      );
      setJobRankRequests(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleApprove = async (requestId) => {
    try {
      await axios.put(
        `http://localhost:5002/api/v1/job_rank_requests/${requestId}/approve`
      );
      fetchJobRankRequests();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleReject = async (requestId) => {
    try {
      await axios.put(
        `http://localhost:5002/api/v1/job_rank_requests/${requestId}/reject`
      );
      fetchJobRankRequests();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex ml-[2%] flex-col mt-[10px]">
      <div className="flex flex-col justify-center items-center mx-auto my-10 bg-gray-100 h-[100vh]">
        <h1 className="text-3xl mb-4">Approve Job Rank Requests</h1>
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="w-1/3">Employee ID</th>
              <th className="w-1/3">Current Job Rank</th>
              <th className="w-1/3">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobRankRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.employeeId}</td>
                <td>{request.currentJobRank}</td>
                <td>
                  {request.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(request.id)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {request.status === "Approved" && (
                    <span className="text-green-500">Approved</span>
                  )}
                  {request.status === "Rejected" && (
                    <span className="text-red-500">Rejected</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveJobRank;
