import React, { useEffect, useState } from "react";
import { FaCheck, FaSearch, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { approved, rejected } from "../../../redux/reducers/loginReducer";

const initialState = {
  searchQuery: "",
};

const ApproveRequest = () => {

  const [accountData, setAccountData] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const approvedItems = useSelector((state) => state.auth.approvedItems);
  const rejectedItems = useSelector((state) => state.auth.rejectedItems);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get(
         "http://localhost:5002/api/v1/employee_requistion"
       );
       setAccountData(response.data);
       console.log(response.data);
     } catch (error) {
       // Handle error if the API request fails
       console.error("Error fetching data:", error);
     }
   };

   fetchData();
 }, []);
  

const handleApprove = (id) => {
  if (!approvedItems.includes(id)) {
    dispatch(approved(id)); // Dispatch the approved action with the item's ID
  }
};

const handleReject = (id) => {
  if (!rejectedItems.includes(id)) {
    dispatch(rejected(id)); // Dispatch the rejected action with the item's ID
  }
};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search is done");
  };

  return (
    <div className="fixed flex w-full lg:ml-[1%] lg:mr-[1%] flex-col mt-12">
      <div className="flex justify-center items-center rounded-[5px] mx-4 my-10">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center"
        >
          <input
            id="search"
            name="search"
            value={formData.searchQuery}
            onChange={(e) => {
              setFormData({ ...formData, searchQuery: e.target.value });
            }}
            type="text"
            className="bg-gray-100 w-[250px] lg:w-[350px] outline-none border-2 border-gray-300 pl-3 h-10 rounded-[5px] placeholder:text-[18px] leading-4 font-normal"
            placeholder="Search here..."
          />
          <button
            type="submit"
            className="bg-blue-400 h-10 flex px-[14px] justify-center items-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer"
          >
            <FaSearch color="white" />
          </button>
        </form>
      </div>
      <div
        className="flex ml-[20%] justify-center items-center px-5 overflow-x-auto"
        style={{
          overflowX: "auto",
          "@media (min-width: 1024px)": { overflowX: "hidden" },
        }}
      >
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Approved</th>
              <th className="px-4 py-2">staff ID</th>
              <th className="px-4 py-2">job Title</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">CGPA</th>
              <th className="px-4 py-2">Qualification</th>
              <th className="px-4 py-2 w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {accountData.map(
              (
                { staff_id, job_title, quantity, cgpa, qualification },
                index
              ) => {
                const isApproved = approvedItems.includes(index);
                const isRejected = rejectedItems.includes(index);
                return (
                  <tr key={index} className="bg-gray-100/{0-4}">
                    <td className="border px-4 py-2">
                      {isApproved ? (
                        <FaCheck color="green" />
                      ) : isRejected ? (
                        <FaTimes color="red" />
                      ) : null}
                    </td>
                    <td className="border px-4 py-2">{staff_id}</td>
                    <td className="border px-4 py-2">{job_title}</td>
                    <td className="border px-4 py-2">{quantity}</td>
                    <td className="border px-4 py-2">{cgpa}</td>
                    <td className="border px-4 py-2">
                      {qualification ? "Qualified" : "Not Qualified"}
                    </td>
                    <td className="w-auto flex justify-center items-center gap-2 border py-2">
                      <button
                        className={`${
                          isApproved ? "bg-gray-400" : "bg-green-500"
                        } rounded-sm px-1`}
                        onClick={() => {
                          handleApprove(index);
                        }}
                      >
                        {isApproved ? (
                          <span>Approved</span>
                        ) : (
                          <span>Approve</span>
                        )}
                      </button>
                      {!isApproved && !isRejected && (
                        <button
                          className="bg-red-400 rounded-sm px-1"
                          onClick={() => {
                            handleReject(index);
                          }}
                        >
                          <span>Reject</span>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRequest;
