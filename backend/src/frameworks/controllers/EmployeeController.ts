import { EmployeeUsecase } from "@application/use-cases/EmployeeUsecase";
import { NextFunction, Request, Response } from "express";

export class EmployeeController {
  private employeeUseCase: EmployeeUsecase;
  constructor(employeeUsecase: EmployeeUsecase) {
    this.employeeUseCase = employeeUsecase;
  }

  async login(req: Request, res: Response, next: NextFunction) {
      try {
        const email = req.body.email;
        console.log(req.body)
      const result = await this.employeeUseCase.Login(email);
      return res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }
  async verifyOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, otp } = req.body;
      console.log(email)
      const result = await this.employeeUseCase.verifyOtp(otp, email);
      return res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }
}
