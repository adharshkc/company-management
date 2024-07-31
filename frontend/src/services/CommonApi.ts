import { commonAxiosInstance } from "../apis/adminAxiosInstance"


export const getTodo = async function(){
    return await commonAxiosInstance.get('/todos')
}

export const updateTodo = async function(id: number){
    return await commonAxiosInstance.put(`/update/:${id}`)
}