import { CreateEmployeeUsecase } from "@application/use-cases/Hr/CreateEmployeeUsecase";
import { CreateTeamUsecase } from "@application/use-cases/Hr/CreateTeamUseCase";
import { GetAllEmployeesUsecase } from "@application/use-cases/Hr/GetAllEmployeeUsecase";
import { GetAllTeamsUsecase } from "@application/use-cases/Hr/GetAllTeamsUsecase";
import { GetHrUsecase } from "@application/use-cases/Hr/GetHrUsecase";
import { HrLoginUsecase } from "@application/use-cases/Hr/HrLoginUsecase";
import { VerifyOtpUsecase } from "@application/use-cases/Hr/VerifyOtpUsecase";
import { NextFunction, Request, Response } from "express";

export class HrController {
  constructor(
    private hrLoginUsecase: HrLoginUsecase,
    private hrVerifyOtpUsecase: VerifyOtpUsecase,
    private getHrUsecase: GetHrUsecase,
    private createEmployeeUsecase: CreateEmployeeUsecase,
    private getAllEmployeesUsecase: GetAllEmployeesUsecase,
    private getAllTeamsUsecase: GetAllTeamsUsecase,
    private createTeamUsecase: CreateTeamUsecase
  ) {}
  async hrLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      console.log(req.body);
      const response = await this.hrLoginUsecase.execute(email);

      return res.status(response.status).json(response.data);
    } catch (error) {
      next(error);
    }
  }

  async verifyOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, otp } = req.body;
      const result = await this.hrVerifyOtpUsecase.execute(otp, email);
      //  res.cookie('hrToken', result.data.refreshToken,{
      //   httpOnly:true,
      //   sameSite:'strict',
      //   secure:process.env.NODE_ENV ==='PRODUCTION',
      //   maxAge: 24 * 60 * 60 * 1000,
      //   path:'/'
      //  })
      return res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }

  async getHr(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.hr as any;
      const hr_id = payload.userId;
      const result = await this.getHrUsecase.execute(parseInt(hr_id));
      return res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }
  async addEmployee(req:Request, res:Response, next:NextFunction){
    try {
      const data = req.body;
      console.log("requested")
      const result = await this.createEmployeeUsecase.execute(data)
      return res.status(result.status).json(result.data)
    } catch (error) {
      next(error)
    }
  }

  async getEmployees(req:Request, res:Response, next:NextFunction){
    try {
      const result = await this.getAllEmployeesUsecase.execute()
      return res.status(result.status).json(result.data)
    } catch (error) {
      next(error)
    }
  }

  async createTeam(req:Request, res:Response, next:NextFunction){
    try {
      const name = req.body.name
      console.log(req.body)
      const result = await this.createTeamUsecase.execute(name)
      return res.status(result.status).json(result.data)
    } catch (error) {
      next(error)
    }
  }

  async getTeams(req:Request, res:Response, next:NextFunction){
    try {
      const result = await this.getAllTeamsUsecase.execute()
      return res.status(result.status).json(result.data)
    } catch (error) {
      next(error)
    }
  }
}
