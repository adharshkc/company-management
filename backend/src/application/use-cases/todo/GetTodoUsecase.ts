import { TodoRepository } from "@application/interface/TodoRepository";



export class GetTodoUsecase{
    constructor(private todoRepository:TodoRepository){}
}