import { commonAxiosInstance, quoteAxiosInstance } from "../apis/adminAxiosInstance"


export const createTodo = async function(data:string){
    return await commonAxiosInstance.post('/todo', {todo:data})
}


export const getTodo = async function(){
    return await commonAxiosInstance.get('/todos')
}

export const updateTodo = async function(id: number){
    return await commonAxiosInstance.put(`/todo/update/${id}`)
}

export const deleteTodo = async function(id:number){
    return await commonAxiosInstance.delete(`/todo/delete/${id}`)
}

export const getQuote = async function(){
    return await quoteAxiosInstance.get('/random')
}