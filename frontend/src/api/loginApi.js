import axios from "axios";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:5002/api/v1/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
