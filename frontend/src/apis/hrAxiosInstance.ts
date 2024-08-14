// import axios from "axios";
import axiosInstance from "./configs/axiosConfig";
import { hrBaseURL } from "../constants/constants";
import useAuthStore from "../zustand/AuthStore";

export const hrAxiosInstance = axiosInstance(hrBaseURL);

hrAxiosInstance.interceptors.request.use(async (req) => {
  // const token = localStorage.getItem("hrToken");

  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
});

hrAxiosInstance.interceptors.response.use(
  async (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.status === "401" && !originalRequest._retry) {
      originalRequest._retry = true;
    }
    try {
      const response = await hrAxiosInstance.post("/token");
      const accessToken = response.data.accessToken;
      useAuthStore.getState().setAccessToken(accessToken);
      localStorage.setItem("hrToken", accessToken)
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return hrAxiosInstance(originalRequest);
    } catch (err) {
      console.log(err);
      window.location.href = "/hr/login";
    }
  }
);
