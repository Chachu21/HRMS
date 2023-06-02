import React, { useEffect, useState } from "react";
import { FaCheck, FaSearch, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { approved, rejected } from "../../../redux/reducers/loginReducer";

const initialState = {
  searchQuery: "",
};

const ApproveRequest = () => {
  // mockData.js
  const mockData = [
    {
      id: 1,
      fname: "John",
      lname: "Doe",
      email: "johndoe@example.com",
      password: "password123",
      phone_number: "1234567890",
      role: "admin",
    },
    {
      id: 4,
      fname: "John",
      lname: "Doe",
      email: "johndoe@example.com",
      password: "password123",
      phone_number: "1234567890",
      role: "admin",
    },
    {
      id: 3,
      fname: "John",
      lname: "Doe",
      email: "johndoe@example.com",
      password: "password123",
      phone_number: "1234567890",
      role: "admin",
    },
    {
      id: 2,
      fname: "John",
      lname: "Doe",
      email: "johndoe@example.com",
      password: "password123",
      phone_number: "1234567890",
      role: "admin",
    },
  ];

  const [accountData, setAccountData] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const approvedItems = useSelector((state) => state.auth.approvedItems);
  const rejectedItems = useSelector((state) => state.auth.rejectedItems);

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
    <div className="flex ml-[18%] flex-col mt-20">
      <div className="flex justify-center items-center rounded-[5px] mx-4 my-10 ">
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
            className="bg-gray-100 w-[250px] outline-none border-2 border-gray-300 pl-3 lg:w-[350px] h-10 rounded-[5px] placeholder:text-[18px] leading-4 font-normal"
            placeholder="search here..."
          />
          <button
            type="submit"
            className="bg-blue-400 h-10 flex px-[14px] justify-center items-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer"
          >
            <FaSearch color="white" />
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center px-5">
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">approved</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2 w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((datas) => {
              const isApproved = approvedItems.includes(datas.id);
              const isRejecte = rejectedItems.includes(datas.id);
              return (
                <tr key={datas.id} className="bg-gray-100/{0-4}">
                  <td className="border px-4 py-2">
                    {isApproved ? (
                      <FaCheck color="green" />
                    ) : isRejecte ? (
                      <FaTimes color="red" />
                    ) : null}
                  </td>
                  <td className="border px-4 py-2">{datas.fname} </td>
                  <td className="border px-4 py-2">{datas.lname} </td>
                  <td className="border px-4 py-2">{datas.email}</td>
                  <td className="w-auto flex justify-center items-center gap-2 border py-2">
                    <button
                      className={`${
                        isApproved ? "bg-gray-400" : "bg-green-500"
                      } rounded-sm px-1`}
                      onClick={() => {
                        handleApprove(datas.id);
                      }}
                    >
                      {isApproved ? (
                        <span>Approved</span>
                      ) : (
                        <span>Approve</span>
                      )}
                    </button>
                    {!isApproved && !isRejecte && (
                      <button
                        className="bg-red-400 rounded-sm px-1"
                        onClick={() => {
                          handleReject(datas.id);
                        }}
                      >
                        <span>Reject</span>
                      </button>
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

export default ApproveRequest;
