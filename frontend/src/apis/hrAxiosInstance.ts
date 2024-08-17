// import axios from "axios";
import axiosInstance from "./configs/axiosConfig";
import { hrBaseURL } from "../constants/constants";

export const hrAxiosInstance = axiosInstance(hrBaseURL);

hrAxiosInstance.interceptors.request.use(async (req) => {
  const token = localStorage.getItem("hrToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});


// hrAxiosInstance.interceptors.response.use(
//   (res) => res, 
//   async (error) => {
//     console.log(error)
//     const originalRequest = error.config;
//     console.log(originalRequest)
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const response = await hrAxiosInstance.post("/token");
//         const newAccessToken = response.data.accessToken;
//         useAuthStore.getState().setAccessToken(newAccessToken);
//         console.log(response)
//         localStorage.setItem("hrToken", newAccessToken);
//         const token = localStorage.getItem('hrToken')
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return hrAxiosInstance(originalRequest); 
//       } catch (err) {
//         console.error("Token refresh failed:", err);
//         // window.location.href = "/hr/login"; 
//       }
//     }
//     localStorage.setItem("error", "error is there")
//     console.log("error found",error)
//     if (error.response?.status === 419) {
//       // useAuthStore.getState().setAccessToken(null);
//       window.location.href = "/hr/login";
//     }
//     return Promise.reject(error); 
//   }
// );