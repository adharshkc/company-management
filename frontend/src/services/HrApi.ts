import { EmployeeDetail, Otp } from "../types/types";
import { hrAxiosInstance } from "../apis/hrAxiosInstance";


export const hrLogin= async(email:string)=>{
    return await hrAxiosInstance.post('/login', {email})
}

export const verifyOtp = async ({email, otp}:Otp)=>{
    return await hrAxiosInstance.post('/verify-otp', {email, otp})
}

export const getHr = async()=>{
    return await hrAxiosInstance.get('/')
}

export const createEmployee = async(data:EmployeeDetail)=>{
    return await hrAxiosInstance.post('/add-employee', data)
}

export const allEmployees = async()=>{
    return await hrAxiosInstance.get('/employees')
}

export const createTeam = async (name:string)=>{
    return await hrAxiosInstance.post('/add-team', {name})
}