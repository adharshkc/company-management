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
      const payload = req.adminId
      console.log(payload)
      res.status(200).json("status")
    } catch (error) {
      next(error)
      console.log(error)
    }
  }
}
