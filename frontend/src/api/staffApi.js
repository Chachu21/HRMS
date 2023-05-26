import axios from "axios";

export const staffRegister = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5002/api/v1/staff/register",
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
