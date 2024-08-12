
import { HrUsecase } from "@application/use-cases/HrUsecase";
import { NextFunction, Request, Response } from "express";

export class HrController {
  private hrUsecase: HrUsecase;
  constructor(hrUsecase: HrUsecase) {
    this.hrUsecase = hrUsecase;
  }

  async hrLogin(req: Request, res: Response, next: NextFunction) {
    try {
        const {email} = req.body;
        console.log(req.body)
        const response = await this.hrUsecase.hrLogin(email);
        return res.status(response.status).json(response.data)
    } catch (error) {
        next(error)
    }
  }

  async verifyOtp(req:Request, res:Response, next:NextFunction){
   try {
     const {email, otp} = req.body;
     const result = await this.hrUsecase.verifyOtp(otp, email)
     return res.status(result.status).json(result.data)
   } catch (error) {
    next(error)
   }
  }
}
