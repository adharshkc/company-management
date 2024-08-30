import { AddHrUsecase } from "@application/use-cases/admin/AddHrUsecase";
import { AdminLoginUsecase } from "@application/use-cases/admin/AdminLoginUsecase";
import { GetAdmin } from "@application/use-cases/admin/GetAdmin";
import { NextFunction, Request, Response } from "express";

export class AdminController {
  constructor(
    private loginAdmin: AdminLoginUsecase,
    private addHr: AddHrUsecase,
    private getAdmin: GetAdmin
  ) {}

  async adminLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      const result = await this.loginAdmin.execute(email, password);
      console.log(result.status);
      res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
      console.log(error);
    }
  }

  async createHr(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const result = await this.addHr.execute(data);
      res.status(result.status).json(result.data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async admin(req: Request, res: Response, next: NextFunction) {
    try {
      const payload: any = req.adminId;
      const adminId: string = payload?.userId;
      const result = await this.getAdmin.execute(parseInt(adminId));
      res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
      console.log(error);
    }
  }
}
