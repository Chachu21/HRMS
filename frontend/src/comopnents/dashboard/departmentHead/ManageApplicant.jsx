import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageApplicant = () => {
  const [applicantData, setApplicantData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5002/api/v1/lists");
        const applicantList = response.data;

        // Group applicant IDs by vacancy ID
        const groupedApplicants = applicantList.reduce((acc, item) => {
          if (!acc[item.vacancy_id]) {
            acc[item.vacancy_id] = [];
          }
          acc[item.vacancy_id].push(item.applicant_id);
          return acc;
        }, {});

        // Fetch the applicants and vacancy information based on the grouped vacancy IDs
        const combinedData = [];

        for (const vacancyId in groupedApplicants) {
          const applicantIds = groupedApplicants[vacancyId];

          const applicantsResponse = await axios.get(
            `http://localhost:5002/api/v1/applicant?applicant_ids=${applicantIds.join(
              ","
            )}`
          );
          const applicants = applicantsResponse.data;

          const vacancyResponse = await axios.get(
            `http://localhost:5002/api/v1/vacancy?vacancy_id=${vacancyId}`
          );
          const vacancy = vacancyResponse.data;
          console.log(vacancy.title);

          for (const applicant of applicants) {
            combinedData.push({
              id: applicant.id,
              fname: applicant.fname,
              lname: applicant.lname,
              email: applicant.email,
              vacancyId: vacancyId,
              vacancyTitle: vacancy ? vacancy.title : "", // Display vacancy title if available
            });
          }
        }

        setApplicantData(combinedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex ml-[20%] mr-[1%] flex-col mt-20">
      <h1 className="text-2xl font-bold mb-4">Applicant list</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">First Name</th>
            <th className="px-4 py-2 text-left">Last Name</th>
            <th className="px-4 py-2 text-left">Email</th>
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
