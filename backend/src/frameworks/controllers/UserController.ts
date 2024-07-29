import { UserUseCase } from "@application/use-cases/UserUseCase";
import { NextFunction, Request, Response } from "express";

export class UserController {
  private userUserCase: UserUseCase;
  constructor(makeTodo: UserUseCase) {
    this.userUserCase = makeTodo;
  }
  async makeTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = req.body;
      console.log(todo)
      if(!todo) return res.status(400).json("body is missing")
      const payload: any = req.commonId;
      const userId: string = payload?.commonId;

      console.log(userId);
      const result = await this.userUserCase.makeTodo(todo,parseInt(userId) );
      res.status(result.status).json(result.data)
      console.log(result)
    } catch (error) {
      next(error)
      console.log(error)
    }
  }

  async getTodo(req: Request, res: Response, next:NextFunction){
    try {
      const payload: any = req.commonId;
      const userId: string = payload?.commonId;
      const result = await this.userUserCase.getTodo(parseInt(userId))
      console.log(result)
    } catch (error) {
      
    }
  }
}
