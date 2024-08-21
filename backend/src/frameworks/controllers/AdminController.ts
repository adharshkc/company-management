import { AdminUsecase } from "@application/use-cases/AdminUsecase";
import { NextFunction, Request, Response } from "express";

export class AdminController {

  private adminUsecase: AdminUsecase;
  constructor(loginAdmin: AdminUsecase) {
    this.adminUsecase = loginAdmin;
  }

  async adminLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
     const result =  await this.adminUsecase.adminLogin(email, password)
     console.log(result.status)
     res.status(result.status).json(result.data)
    } catch (error) {
      next(error)
      console.log(error);
    }
  }

  async getAdmin(req:Request, res: Response, next:NextFunction){
    try {
      const payload:any = req.adminId;
      const adminId:string = payload?.userId;
      console.log(adminId)
      const result = await this.adminUsecase.getAdmin(parseInt(adminId))
      res.status(result.status).json(result.data)
    } catch (error) {
      next(error)
      console.log(error)
    }
  }

  async createHr(req:Request, res:Response, next:NextFunction){
    try {
      const data = req.body;
      const result = await this.adminUsecase.addHr(data)
      res.status(result.status).json(result.data)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}
