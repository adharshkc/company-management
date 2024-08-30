import { TodoRepository } from "@application/interface/TodoRepository";



export class UpdateStatusUsecase{
    constructor(private todoRepository:TodoRepository){}
}