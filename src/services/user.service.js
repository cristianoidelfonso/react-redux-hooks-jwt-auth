import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://localhost:8080/api/test/";
const API_URL = "http://localhost:3000";

const getPublicContent = () => {
  return axios.get(API_URL);
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};