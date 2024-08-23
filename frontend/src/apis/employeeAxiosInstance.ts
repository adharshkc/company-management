import axiosInstance from "./configs/axiosConfig";
import { employeeBaseURL } from "../constants/constants";




export const employeeAxiosInstance =  axiosInstance(employeeBaseURL)

employeeAxiosInstance.interceptors.request.use(async(req)=>{
    const token = localStorage.getItem("employeeToken")
    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})