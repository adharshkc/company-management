import adminAxiosInstance from "../apis/configs/axiosConfig"


export const AdminDetails = async()=>{
    return await adminAxiosInstance.get('/admin')
}