import adminAxiosInstance from "../apis/configs/axiosConfig"
import { LoginFormValues } from "types/types"


export const adminLogin = async({email, password}: LoginFormValues)=>{
    return await adminAxiosInstance.post('/login', {email, password})
}