import axios from "axios";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/users/register",
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
