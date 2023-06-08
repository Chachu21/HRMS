
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";



const ApplicantResult = () => {
  
  const [results, setResults] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5002/api/v1/result/result/${user.applicant_id}`
        );
        const data = await response.json();
        setResults(data);
        console.log("the response is :",response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user.applicant_id]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-lg mb-4 mt-8 text-xl ">
        Exam Result
      </h1>
      <table className="table-auto border border-gray-400">
        <thead>
          <tr>
           
            <th className="px-4 py-2 border border-gray-400">Result</th>
            <th className="px-4 py-2 border border-gray-400">Vacancy Title</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id} className="border border-gray-400">
              <td className="px-4 py-2">{result.result}</td>
              <td className="px-4 py-2">{result.vacancy_title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantResult;