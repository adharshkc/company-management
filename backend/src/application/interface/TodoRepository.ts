import { Todo } from "@domain/entities/Todo";

export interface TodoRepository{
    createTodo(todo:Todo): Promise<Todo|null>;
    getTodo(userId:number): Promise<Todo[]|null>
    updateStatus(todoId: number):Promise<Todo|null>
    deleteTodo(todoId: number):Promise<number|null>
    
}