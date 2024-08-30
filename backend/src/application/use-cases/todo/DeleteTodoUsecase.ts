import { TodoRepository } from "@application/interface/TodoRepository";



export class DeleteTodoUsecase{
    constructor(private todoRepository:TodoRepository){}
    async execute(todoId:number, userId:number)
}