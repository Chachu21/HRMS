import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageApplicant = () => {
  const [applicantData, setApplicantData] = useState([]);
  const [deptHeadData, setDeptHeadData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const department_id = deptHeadData.department_id;

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (department_id) {
          // Check if department_id is available
          const response = await axios.get(
            `http://localhost:5002/api/v1/lists/department/${department_id}`
          );
          const applicantList = response.data;
          const applicantIds = applicantList.map((item) => item.applicant_id);
          const applicantsResponse = await axios.get(
            `http://localhost:5002/api/v1/applicant?applicant_ids=${applicantIds.join(
              ","
            )}`
          );
          const applicants = applicantsResponse.data;

          const formattedData = applicantList.map((item) => {
            const applicant = applicants.find(
              (app) => app.id === item.applicant_id
            );

            if (applicant) {
              return {
                id: applicant.id,
                fname: applicant.fname,
                lname: applicant.lname,
                email: applicant.email,
                cv: applicant.cv,
                vacancyId: item.vacancy_id,
                vacancyTitle: item.vacancy_title,
              };
            }

            return null;
          });

          setApplicantData(formattedData.filter(Boolean));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [department_id]);

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
    <div className="flex lg:ml-[20%] mr-[1%] flex-col mt-20">
      <h1 className="text-2xl font-bold mb-4 ml-[30%]">Applicant list</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">First Name</th>
            <th className="px-4 py-2 text-left">Last Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">CV File</th>
            <th className="px-4 py-2 text-left">Vacancy ID</th>
            <th className="px-4 py-2 text-left">Vacancy Title</th>
          </tr>
        </thead>
        <tbody>
          {applicantData.map((applicant) => (
            <tr key={applicant.id} className="border border-gray-400">
              <td className="px-4 py-2">{applicant.fname}</td>
              <td className="px-4 py-2">{applicant.lname}</td>
              <td className="px-4 py-2">{applicant.email}</td>
              <td className="px-4 py-2">
                {applicant.cv && applicant.cv.endsWith(".pdf") ? (
                  <a
                    href={`http://localhost:5002/uploads/${applicant.cv}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Download PDF
                  </a>
                ) : (
                  applicant.cv && (
                    <div>
                      <a
                        href={`http://localhost:5002/uploads/${applicant.cv}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Image
                      </a>
                      <button
                        className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded lg:ml-2"
                        onClick={() => handleDownload(applicant.cv)}
                      >
                        Download
                      </button>
                    </div>
                  )
                )}
              </td>
              <td className="px-4 py-2">{applicant.vacancyId}</td>
              <td className="px-4 py-2">{applicant.vacancyTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageApplicant;
