import { TodoRepository } from "@application/interface/TodoRepository";



export class UpdateStatusUsecase{
    constructor(private todoRepository:TodoRepository){}

    async execute(todoId:number, userId:number){
        try {
            const allTodos = await this.todoRepository.updateStatus(todoId, userId);
            console.log(allTodos)
            if (allTodos) {
              return {
                status: 200,
                data: {
                  success: true,
                  todos: allTodos,
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