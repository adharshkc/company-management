import { AdminUsecase } from "@application/use-cases/AdminUsecase";
import { Request, Response } from "express";

export class AdminController {
  // loginAdmin: LoginAdmin;
  // constructor(adminRepository: AdminRepository) {
  //   this.loginAdmin = new LoginAdmin(adminRepository);
  // }

  // async login(req: Request, res: Response) {
  //   try {
  //     const { email, password } = req.body;
  //     await this.loginAdmin.execute(email, password)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  loginAdmin: AdminUsecase;
  constructor(loginAdmin: AdminUsecase) {
    this.loginAdmin = loginAdmin;
  }

  async adminLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      await this.loginAdmin.adminLogin(email, password)
    } catch (error) {
      console.log(error);
    }
  }
}
