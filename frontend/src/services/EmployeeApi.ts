import { employeeAxiosInstance } from "../apis/employeeAxiosInstance"
import { Otp } from "../types/types"


export const checkSession = async ()=>{
    return await employeeAxiosInstance.get('/check-session')
}

export const verifyOtp = async ({email, otp}:Otp)=>{
    return await employeeAxiosInstance.post('/verify-otp', {email, otp})
}

export const employeeLogin= async(email:string)=>{
    return await employeeAxiosInstance.post('/login', {email})
}

export const getSprints = async ()=>{
    return await employeeAxiosInstance.get('/projects/sprints')
}

export const createSprint = async(name:string)=>{
    return await employeeAxiosInstance.post('/projects/sprints/add', {name})
}