import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: "http://localhost:9000/",
  timeout: 30000,
});

export default axiosClient;
