
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
    //  res.cookie('hrToken', result.data.refreshToken,{
    //   httpOnly:true,
    //   sameSite:'strict',
    //   secure:process.env.NODE_ENV ==='PRODUCTION',
    //   maxAge: 24 * 60 * 60 * 1000,
    //   path:'/'
    //  })
     return res.status(result.status).json(result.data)
   } catch (error) {
    next(error)
   }
  }

  // async refreshToken (req:Request, res:Response, next:NextFunction){
  //   try {
  //     const payload:any = req.hr
  //     console.log(payload)
  //     const userId:string = payload.userId
  //     const commonId:string = payload.commonId
  //     const result = await this.hrUsecase.createNewAccessToken(parseInt(userId), parseInt(commonId))
  //     return res.status(result.status).json(result.data)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async getHr(req:Request, res:Response, next: NextFunction){
    try {
      const payload = req.hr as any
      const hr_id = payload.userId
      const result = await this.hrUsecase.getHr(parseInt(hr_id))
      return res.status(result.status).json(result.data)
    } catch (error) {
      next(error)
    }
  }

  async addEmployee(req:Request, res:Response, next:NextFunction){
    try {
      const data = req.body;
      console.log("requested")
      const result = await this.hrUsecase.createEmployee(data)
      return res.status(result.status).json(result.data)
    } catch (error) {
      next(error)
    }
  }
  async getEmployees(req:Request, res:Response, next:NextFunction){
    try {
      const result = await this.hrUsecase.getAllEmployees()
      return res.status(result.status).json(result.data)
    } catch (error) {
      
    }
  }
}
