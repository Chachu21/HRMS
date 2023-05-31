import React from "react";
import { useLocation } from "react-router-dom";

const JobRankDetails = () => {
  const location = useLocation();
  const forwardedData = location.state;

  return (
    <div>
      <h2>Job Rank Details</h2>
      <p>Staff ID: {forwardedData.staff_id}</p>
      <p>Level: {forwardedData.level}</p>
      <p>CV: {forwardedData.cv}</p>
    </div>
  );
};

export default JobRankDetails;
