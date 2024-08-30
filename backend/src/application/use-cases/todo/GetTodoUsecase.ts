import { TodoRepository } from "@application/interface/TodoRepository";



export class GetTodoUsecase{
    constructor(private todoRepository:TodoRepository){}
    async execute(user_id: number) {
        try {
          const todos = await this.todoRepository.getTodo(user_id);
          if (todos) {
            return {
              status: 200,
              data: {
                success: true,
                todos:todos,
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