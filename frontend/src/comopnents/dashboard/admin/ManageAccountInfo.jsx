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
  const [employeeCount, setEmployeeCount] = useState(0);
  const [deptHeadCount, setDeptHeadCount] = useState(0);

  useEffect(() => {
    loadAccountData();
    loadRoleName();
  }, []);

  useEffect(() => {
    countEmployeesAndDeptHeads();
  }, [accountData]);

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

  const countEmployeesAndDeptHeads = () => {
    const employeeCount = accountData.filter(
      (data) => data.role === "Employee"
    ).length;
    const deptHeadCount = accountData.filter(
      (data) => data.role === "DepartmentHead"
    ).length;
    setEmployeeCount(employeeCount);
    setDeptHeadCount(deptHeadCount);
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
    <div className="mx-auto mt-20 w-full md:w-[80%] lg:w-[70%] lg:ml-[20%] lg:mr-[1%]">
      <div className="flex justify-center items-center rounded-[5px] mx-4 my-10 gap-5">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center mt-4"
        >
          <input
            id="search"
            name="search"
            value={formData}
            onChange={(e) => {
              setFormData(e.target.value);
            }}
            type="text"
            className="bg-gray-100 w-[250px] outline-none border-2 border-gray-300 pl-3 lg:w-[350px] h-10 rounded-[5px] placeholder:text-[18px] leading-4 font-normal "
            placeholder="search here..."
            light
          />
          <button
            type="submit"
            className="bg-blue-400 h-10 flex px-[14px] justify-center items-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer"
          >
            <FaSearch color="white" />
          </button>
        </form>
        <button
          className="bg-blue-400 h-10 px-[14px] rounded-md mt-4"
          onClick={handleReload}
        >
          <TfiReload color="white" fontSize="[20px]" />
        </button>
      </div>
      <div className="flex justify-between gap-3 mb-4">
        <div className="flex justify-normal gap-4">
          <span>Number of employee: </span>
          <div className="flex items-center justify-center w-10 h-10 bg-blue-950 rounded-full text-white text-lg font-semibold">
            {employeeCount}
          </div>
        </div>
        <div className="flex justify-normal gap-4">
          <span>Number of department head: </span>
          <div className="flex items-center justify-center w-10 h-10 bg-blue-950 rounded-full text-white text-lg font-semibold">
            {deptHeadCount}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100  uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">First Name</th>
              <th className="py-3 px-6 text-left">Last Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className=" text-sm ">
            {(filteredData.length === 0 ? accountData : filteredData).map(
              (data, index) => (
                <tr
                  key={data.id}
                  className={`border-b border-gray-200 hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {data.id}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {data.fname}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {data.lname}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {data.email}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {data.role}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <Link
                      to={`/admin/dashboard/manageaccount/update/${data.id}`}
                      className=" mr-3 text-blue-600 hover:text-blue-700"
                    >
                      Edit
                    </Link>
                    <button
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ManageAccountInfo;
