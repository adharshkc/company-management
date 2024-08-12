// import axios from "axios";
import axiosInstance from "./configs/axiosConfig";
import { hrBaseURL } from "../constants/constants";

export const hrAxiosInstance = axiosInstance(hrBaseURL)

hrAxiosInstance.interceptors.request.use(async(req)=>{
    const token = localStorage.getItem("hrToken");
    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})