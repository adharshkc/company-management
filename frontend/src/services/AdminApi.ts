
import { adminAxiosInstance } from "../apis/adminAxiosInstance"
import { HrDetails, LoginFormValues, Project } from "../types/types"


export const adminLogin = async({email, password}: LoginFormValues)=>{
    return await adminAxiosInstance.post('/admin/login', {email, password})
}


export const AdminDetails = async()=>{
    return await adminAxiosInstance.get('/admin/')
}

export const createProject = async(projectDetails:Project)=>{
    return await adminAxiosInstance.post('/projects/create', projectDetails)
}

export const getAllProjects = async()=>{
    return await adminAxiosInstance.get('/projects/')
}

export const createHr = async(data:HrDetails)=>{
    return await adminAxiosInstance.post('/admin/addHr', data)
}