import { LoginUsecase } from "@application/use-cases/employee/LoginUsecase";
import { VerifyOtpUsecase } from "@application/use-cases/employee/VerifyOtpUsecase";
import { NextFunction, Request, Response } from "express";

export class EmployeeController {
  constructor(private loginUsecase:LoginUsecase,private verifyOtp: VerifyOtpUsecase) {
    
  }

  async login(req: Request, res: Response, next: NextFunction) {
      try {
        const email = req.body.email;
        console.log(req.body)
      const result = await this.loginUsecase.execute(email);
      return res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }
  async otpVerify(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, otp } = req.body;
      console.log(email)
      const result = await this.verifyOtp.execute(otp, email);
      return res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }

  async checkSession(req:Request, res:Response, next:NextFunction){
    console.log("hdf")
     return res.status(200).json({data:{success:true, message:"Session is valid"}})
  }
}
