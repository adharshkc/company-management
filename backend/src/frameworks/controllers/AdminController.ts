import { AdminUsecase } from "@application/use-cases/AdminUsecase";
import { Request, Response } from "express";

export class AdminController {

  private adminUsecase: AdminUsecase;
  constructor(loginAdmin: AdminUsecase) {
    this.adminUsecase = loginAdmin;
  }

  async adminLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
     const admin =  await this.adminUsecase.adminLogin(email, password)
     console.log("authentication success")
    } catch (error) {
      console.log(error);
    }
  }
}
