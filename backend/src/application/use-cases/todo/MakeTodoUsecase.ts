import { TodoRepository } from "@application/interface/TodoRepository";



export class MakeTodoUsecase{
    constructor(private todoRepository:TodoRepository){}
}