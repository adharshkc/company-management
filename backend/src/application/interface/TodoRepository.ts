import { Todo } from "@domain/entities/Todo";

export interface TodoRepository{
    createTodo(todo:Todo): Promise<Todo|null>;
    getTodo(userId:number): Promise<Todo[]|null>
}