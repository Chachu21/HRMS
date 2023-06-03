import axios from "axios";

export const registerUser = async (formData, config) => {
  try {
    const response = await axios.post(
      "http://localhost:5002/api/v1/applicant/register",
      formData, config
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
