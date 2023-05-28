import axios from "axios";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5002/api/v1/applicant/register",
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
