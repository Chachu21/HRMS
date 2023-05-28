import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TfiReload } from "react-icons/tfi";

const ManageAccountInfo = () => {
  const [accountData, setAccountData] = useState([]);
  const [formData, setFormData] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    loadAccountData();
    loadRoleName();
  }, []);

  const loadAccountData = async () => {
    try {
      const response = await axios.get("http://localhost:5002/api/v1/staff");
      setAccountData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadRoleName = async () => {
    try {
      const response = await axios.get("http://localhost:5002/api/v1/roles");
      const roleData = response.data;
      const updatedAccountData = accountData.map((data) => {
        const roleName = roleData.find(
          (role) => role.id === data.role_id
        )?.name;
        return { ...data, role: roleName };
      });
      setAccountData(updatedAccountData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5002/api/v1/staff/delete/${id}`)
      .then((response) => {
        setAccountData(accountData.filter((item) => item.id !== id));
        console.log(`deleted user id: ${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("deleted successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredData = accountData.filter((data) => {
      const lowercasedFormData = formData.toLowerCase();
      const lowercasedFname = data.fname.toLowerCase();
      const lowercasedLname = data.lname.toLowerCase();
      const lowercasedEmail = data.email.toLowerCase();
      const lowercasedId = data.id.toString().toLowerCase();

      return (
        lowercasedFname.includes(lowercasedFormData) ||
        lowercasedLname.includes(lowercasedFormData) ||
        lowercasedEmail.includes(lowercasedFormData) ||
        lowercasedId.includes(lowercasedFormData)
      );
    });

    if (filteredData.length === 0) {
      toast.info("No results found");
    }

    setFilteredData(filteredData);
  };

  const handleReload = async () => {
    try {
      const [accountResponse, roleResponse] = await Promise.all([
        axios.get("http://localhost:5002/api/v1/staff"),
        axios.get("http://localhost:5002/api/v1/roles"),
      ]);

      const accountData = accountResponse.data;
      const roleData = roleResponse.data;

      const updatedAccountData = accountData.map((data) => {
        const roleName = roleData.find(
          (role) => role.id === data.role_id
        )?.name;
        return { ...data, role: roleName };
      });

      setAccountData(updatedAccountData);
      setFormData("");
      setFilteredData([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex ml-[18%] flex-col mt-20">
      <div className="flex justify-center items-center rounded-[5px] mx-4 my-10 gap-5">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center"
        >
          <input
            id="search"
            name="search"
            value={formData}
            onChange={(e) => {
              setFormData(e.target.value);
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
        <button
          className="bg-blue-400 h-10 px-[14px] rounded-md"
          onClick={handleReload}
        >
          <TfiReload color="white" fontSize={20} />
        </button>
      </div>
      <div className="flex justify-center items-center px-5">
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2 w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {(filteredData.length > 0 ? filteredData : accountData).map(
              (datas) => {
                return (
                  <tr key={datas.id} className="bg-gray-100/{0-4}">
                    <td className="border px-4 py-2">{datas.id}</td>
                    <td className="border px-4 py-2">{datas.fname} </td>
                    <td className="border px-4 py-2">{datas.lname} </td>
                    <td className="border px-4 py-2">{datas.email}</td>
                    <td className="border px-4 py-2">{datas.phone_number}</td>
                    <td className="border px-4 py-2">{datas.role}</td>
                    <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                      <Link
                        to={`/dashboard/manageaccount/update/${datas.id}`}
                        className="px-2 bg-blue-700 rounded-sm"
                      >
                        Edit
                      </Link>
                      {/* <Link
                        to={`/view/${datas.id}`}
                        className="px-2 bg-gray-300 rounded-sm"
                      >
                        <button>View</button>
                      </Link> */}
                      <button
                        className="bg-red-400 rounded-sm"
                        onClick={() => handleDelete(datas.id)}
                      >
                        Delete
                      </button>
                      <button className="bg-gray-400 rounded-sm">
                        Deactivate
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageAccountInfo;
