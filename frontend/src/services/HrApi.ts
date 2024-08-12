import { Otp } from "../types/types";
import { hrAxiosInstance } from "../apis/hrAxiosInstance";


export const hrLogin= async(email:string)=>{
    return await hrAxiosInstance.post('/login', {email})
}

export const verifyOtp = async ({email, otp}:Otp)=>{
    return await hrAxiosInstance.post('/verify-otp', {email, otp})
}