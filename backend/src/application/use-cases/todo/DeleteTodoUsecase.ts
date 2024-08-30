import { TodoRepository } from "@application/interface/TodoRepository";



export class DeleteTodoUsecase{
    constructor(private todoRepository:TodoRepository){}
    async execute(todoId:number, userId:number){
        try {
            const deletedTodo = await this.todoRepository.deleteTodo(todoId, userId);
            if (deletedTodo) {
              return {
                status: 200,
                data: {
                  success: true,
                  todos: deletedTodo
                },
              };
            }
            return {
              status: 404,
              data: {
                success: false,
                message: "todo not found",
              },
            };
          } catch (error: any) {
            throw new Error(error.message);
          }
    }
}