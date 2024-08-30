import { DeleteTodoUsecase } from "@application/use-cases/todo/DeleteTodoUsecase";
import { GetTodoUsecase } from "@application/use-cases/todo/GetTodoUsecase";
import { MakeTodoUsecase } from "@application/use-cases/todo/MakeTodoUsecase";
import { UpdateStatusUsecase } from "@application/use-cases/todo/UpdateStatusUsecase";
import { TodoUseCase } from "@application/use-cases/TodoUseCase";
import { NextFunction, Request, Response } from "express";

export class TodoController {
  constructor(private makeTodo: MakeTodoUsecase,
    private getTodo: GetTodoUsecase,
    private updateStatus: UpdateStatusUsecase,
    private deleteTodo: DeleteTodoUsecase
  ) {
  }
  async addTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = req.body;
      console.log(todo);
      if (!todo) return res.status(400).json("body is missing");
      const payload: any = req.commonId;
      const userId: string = payload?.commonId;
      const result = await this.makeTodo.execute(todo, parseInt(userId));
      res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }

  async todo(req: Request, res: Response, next: NextFunction) {
    try {
      const payload: any = req.commonId;
      const userId: string = payload?.commonId;
      const result = await this.getTodo.execute(parseInt(userId));
      res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }

  async changeStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const payload: any = req.commonId;
      const userId: string = payload?.commonId;
      const todoId: string = req.params.id;
      console.log(todoId)
      const result = await this.updateStatus.execute(parseInt(todoId), parseInt(userId));
      res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }
  async todoDelete(req: Request, res: Response, next: NextFunction) {
    try {
      const payload: any = req.commonId;
      const userId: string = payload?.commonId;
      const todoId: string = req.params.id;
      const result = await this.deleteTodo.execute(parseInt(todoId), parseInt(userId));
      res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }
}
