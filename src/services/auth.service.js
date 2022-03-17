import axios from "axios";

// const API_URL = "http://localhost:8080/api/auth/";
const API_URL = "http://localhost:3000";

const register = async (name, email, password) => {

  return await axios.post(`${API_URL}/users`, { name, email, password });

  // return axios.post('http://localhost:3000/users', {
  //   name,
  //   email,
  //   password,
  // });

};

const login = async (email, password) => {

  const response = await axios.post('http://localhost:3000/login', { email, password });
  // console.log('services/auth', response.data);
  return response.data;

  // return axios.post('http://localhost:3000/login', { email, password })
  //   .then((response) => {
  //     console.log('services/auth', response.data);
  //     if (response.data.accessToken) {
  //       localStorage.setItem("user", JSON.stringify(response.data.accessToken));
  //     }
  //     return response.data;
  //   })
  //   .catch((error) => console.log(error))

  
  // return axios
  //   .post(API_URL + "signin", {
  //     email,
  //     password,
  //   })
  //   .then((response) => {
  //     if (response.data.accessToken) {
  //       localStorage.setItem("user", JSON.stringify(response.data.accessToken));
  //     }
  //     return response.data;
  //   });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};