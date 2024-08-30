import { TodoRepository } from "@application/interface/TodoRepository";
import { Todo } from "@domain/entities/Todo";



export class MakeTodoUsecase{
    constructor(private todoRepository:TodoRepository){}
    async execute(todo: Todo, user_id: number) {
        console.log(todo)
        try {
          todo.userId = user_id;
          const newTodo = await this.todoRepository.createTodo(todo);
          if (newTodo) {
            return {
              status: 200,
              data: {
                success: true,
                todos: newTodo
              },
            };
          }
          return {
            status: 500,
            data: {
              message: "error creating todo",
            },
          };
        } catch (error: any) {
          throw new Error(error.message);
        }
    }
}