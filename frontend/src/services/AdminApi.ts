
import { adminAxiosInstance } from "../apis/adminAxiosInstance"
import { LoginFormValues } from "../types/types"


export const adminLogin = async({email, password}: LoginFormValues)=>{
    return await adminAxiosInstance.post('/login', {email, password})
}


export const AdminDetails = async()=>{
    return await adminAxiosInstance.get('/')
}