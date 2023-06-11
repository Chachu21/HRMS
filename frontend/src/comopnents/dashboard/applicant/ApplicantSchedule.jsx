import React, { useState, useEffect } from "react";
import axios from "axios";
const ApplicantSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/v1/schedule")
      .then((response) => {
        setSchedule(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex ml-[3%] lg:ml-[20%] mr-[1%] flex-col mt-20">
      <h1 className="text-2xl font-bold my-4">Exam Schedule</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Exam Date</th>
            <th className="px-4 py-2 text-left">Exam Time</th>
            <th className="px-4 py-2 text-left">Exam Place</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((schedule) => (
            <tr key={schedule.id} className="border border-gray-400">
              <td className="px-4 py-2">{schedule.title}</td>
              <td className="px-4 py-2">{schedule.exam_date}</td>
              <td className="px-4 py-2">{schedule.exam_time}</td>
              <td className="px-4 py-2">{schedule.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantSchedule;
