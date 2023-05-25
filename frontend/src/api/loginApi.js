import axios from "axios";

export const loginUser = async (phoneNumber, password) => {
  try {
    const response = await axios.post("http://localhost:5000/api/v1/users/login", {
      phoneNumber,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
