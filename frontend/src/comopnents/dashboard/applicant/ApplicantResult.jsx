import React, { useState, useEffect } from "react";

const ApplicantResult = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/applicants");
      const data = await response.json();
      setApplicants(data);
    };
    fetchData();
  }, []);

  return (

    <div class='ml-96 mt-12'>
      this is the tables
    </div>
    // <table className="table-auto mt-96">
    //   <thead>
    //     <tr>
    //       <th className="px-4 py-2 ml-48">Applicant ID</th>
    //       <th className="px-4 py-2">Result</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {applicants.map((applicant) => (
    //       <tr key={applicant.id}>
    //         <td className="border px-4 py-2">{applicant.applicantId}</td>
    //         <td className="border px-4 py-2">{applicant.result}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};

export default ApplicantResult;
