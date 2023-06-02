import React, { useState, useEffect } from "react";
import axios from "axios";
//import JobRankDetails from "../hrOfficer/JobRankDetails"; // Import the JobRankDetails component from the hrOfficer folder

const ManageJobRank = () => {
  const [jobRankData, setJobRankData] = useState([]);
  //const [forwardedData, setForwardedData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/v1/job_rank")
      .then((response) => {
        setJobRankData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const handleForward = (data) => {
  //   setForwardedData(data);
  // };

  return (
    <div className="flex w-full lg:ml-[18%] flex-col mt-20">
      <h1 className="text-2xl font-bold mb-4">Job Rank Table</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Staff ID</th>
            <th className="px-4 py-2 text-left">Level</th>
            <th className="px-4 py-2 text-left">CV</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobRankData.map((rank) => (
            <tr key={rank.id} className="border border-gray-400">
              <td className="px-4 py-2">{rank.staff_id}</td>
              <td className="px-4 py-2">{rank.level}</td>
              <td className="px-4 py-2">{rank.cv}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  // onClick={() => handleForward(rank)}
                >
                  Forward
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageJobRank;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// //import { useNavigate } from "react-router-dom";
// //import JobRankDetails from "../hrOfficer/JobRankDetails";

// const ManageJobRank = () => {
//   const [jobRankData, setJobRankData] = useState([]);
//   //const [forwardedData, setForwardedData] = useState(null);
//   //const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5002/api/v1/job_rank")
//       .then((response) => {
//         setJobRankData(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   // const handleForward = (data) => {
//   //   setForwardedData(data);
//   //   navigate("/hrofficer/dashboard/jobrankdeatils");
//   // };

//   return (
//     <div className="flex flex-col ml-[20%] mr-[1%]">
//       <h1 className="text-2xl font-bold mb-4">Job Rank Table</h1>
//       <table className="table-auto border-collapse border border-gray-400">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="px-4 py-2 text-left">Staff ID</th>
//             <th className="px-4 py-2 text-left">Level</th>
//             <th className="px-4 py-2 text-left">CV</th>
//             <th className="px-4 py-2 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {jobRankData.map((rank) => (
//             <tr key={rank.id} className="border border-gray-400">
//               <td className="px-4 py-2">{rank.staff_id}</td>
//               <td className="px-4 py-2">{rank.level}</td>
//               <td className="px-4 py-2">{rank.cv}</td>
//               <td className="px-4 py-2">
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                   // onClick={() => handleForward(rank)}
//                 >
//                   Forward
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* {forwardedData && <JobRankDetails jobRankData={forwardedData} />} */}
//     </div>
//   );
// };

// export default ManageJobRank;
