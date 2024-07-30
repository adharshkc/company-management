import { TodoUseCase } from "@application/use-cases/TodoUseCase";
import { NextFunction, Request, Response } from "express";

export class TodoController {
  private todoUseCase: TodoUseCase;
  constructor(makeTodo: TodoUseCase) {
    this.todoUseCase = makeTodo;
  }
  async makeTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = req.body;
      console.log(todo)
      if(!todo) return res.status(400).json("body is missing")
      const payload: any = req.commonId;
      const userId: string = payload?.commonId;

      console.log(userId);
      const result = await this.todoUseCase.makeTodo(todo,parseInt(userId) );
      res.status(result.status).json(result.data)
    } catch (error) {
      next(error)
    }
  }

  async getTodo(req: Request, res: Response, next:NextFunction){
    try {
      const payload: any = req.commonId;
      const userId: string = payload?.commonId;
      const result = await this.todoUseCase.getTodo(parseInt(userId))
      res.status(result.status).json(result.data)
    } catch (error) {
      next(error)
    }
  }

  async changeStatus(req: Request, res: Response, next: NextFunction){
    try {
        const todoId: string = req.params.id
        const result = await this.todoUseCase.updateStatus(parseInt(todoId))
        res.status(result.status).json(result.data)
    } catch (error) {
        next(error)
    }
  }
  async deleteTodo(req: Request, res: Response, next: NextFunction){
    try {
        const todoId: string = req.params.id
        const result = await this.todoUseCase.deleteTodo(parseInt(todoId))
        res.status(result.status).json(result.data)
    } catch (error) {
        next(error)
    }
  }
}
