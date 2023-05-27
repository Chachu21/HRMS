import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const initialState = {
  searchQuery: "",
};

const ManageAccountInfo = () => {
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
  ];

  const [accountData, setAccountData] = useState([]);
  const [formData, setFormData] = useState(initialState);

  const handleDelete = (id) => {
    // axios
    //   .delete(`http://localhost:5002/api/v1/staff/delete/${id}`)
    //   .then((response) => {
    //     setAccountData(accountData.filter((item) => item.id !== id));
    //     console.log(`deleted user id :${id}`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    console.log("deleted successfully");
  };
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5002/api/v1/staff")
  //       .then((response) => {
  //         setAccountData(response.data);
  //         console.log(accountData);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [accountData]);

  const handleDeactive = (id) => {};

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
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2 w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((datas) => {
              return (
                <tr key={datas.id} className="bg-gray-100/{0-4}">
                  <td className="border px-4 py-2">{datas.id}</td>
                  <td className="border px-4 py-2">{datas.fname} </td>
                  <td className="border px-4 py-2">{datas.lname} </td>
                  <td className="border px-4 py-2">{datas.email}</td>
                  <td className="border px-4 py-2">{datas.password}</td>
                  <td className="border px-4 py-2">{datas.phone_number}</td>
                  <td className="border px-4 py-2">{datas.role}</td>
                  <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                    <Link
                      to={`/update/${datas.id}`}
                      className="px-2 bg-blue-700 rounded-sm"
                    >
                      Edit
                    </Link>

                    <Link
                      to={`/view/${datas.id}`}
                      className="px-2 bg-gray-300 rounded-sm"
                    >
                      <button>View</button>
                    </Link>
                    <button
                      className="bg-red-400 rounded-sm"
                      onClick={() => handleDelete(datas.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-gray-400 rounded-sm"
                      onClick={() => handleDeactive(datas.id)}
                    >
                      Dactive
                    </button>
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

export default ManageAccountInfo;
