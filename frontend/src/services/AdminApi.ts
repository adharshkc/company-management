
import { adminAxiosInstance } from "../apis/adminAxiosInstance"
import { LoginFormValues, Project } from "../types/types"


export const adminLogin = async({email, password}: LoginFormValues)=>{
    return await adminAxiosInstance.post('/login', {email, password})
}


export const AdminDetails = async()=>{
    return await adminAxiosInstance.get('/')
}

export const createProject = async(projectDetails:Project)=>{
    return await adminAxiosInstance.post('/projects/create', projectDetails)
}

export const getAllProjects = async()=>{
    return await adminAxiosInstance.get('/projects/')
}