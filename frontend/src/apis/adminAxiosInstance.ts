import axios from "axios";
import axiosInstance from "./configs/axiosConfig";

const adminBaseURL = "http://localhost:3000/api/v1/admin/";
const commonBaseUrl = 'http://localhost:3000/api/v1/common/'

export const adminAxiosInstance = axiosInstance(adminBaseURL);

adminAxiosInstance.interceptors.request.use(async (req) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const commonAxiosInstance = axiosInstance(commonBaseUrl)
commonAxiosInstance.interceptors.request.use(async(req)=>{
    const token = localStorage.getItem('')
})

export const refreshToken = async function(){
    try {
        const refToken = localStorage.getItem('adminRefreshToken')
        if(!refToken){
            console.log('token not found')
        }
            const response = await axios.post(`${adminBaseURL}refresh`,{
                token: refToken
            })

            const {accessToken, refreshToken: refreshToken} = response.data
            localStorage.setItem('adminToken', accessToken)
            localStorage.setItem('adminRefreshToken', refreshToken)
            return accessToken
        
    } catch (error) {
        console.log(error)
    }
}


adminAxiosInstance.interceptors.response.use(async (res)=>res, async(error)=>{
    const originalRequest = error.config;
    if(error.status ==='401'&& !originalRequest._retry){
        originalRequest._retry = true
    }
    try {
        const newAccessToken = await refreshToken()
        axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
    } catch (error) {
        console.log(error)
    }
})