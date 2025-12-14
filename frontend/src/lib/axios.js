// // instance that we can use throughout our app
// import axios from "axios";
// export const axiosInstance = axios.create({
//     baseURL:"http://localhost:5003/api",
//     withCredentials:true,

// });

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
  withCredentials: true,
});
