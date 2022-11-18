import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5200/api',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  },
  withCredentials: true,
});

export default Axios;
