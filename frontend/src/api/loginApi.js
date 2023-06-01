import axios from "axios";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:5002/api/v1/login", {
      email,
      password,
    });
    console.log(response.data);
    return response;
    
  } catch (error) {
    console.log(error);
    // throw new Error(error.message);
    return error
  }
};
