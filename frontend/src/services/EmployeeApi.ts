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