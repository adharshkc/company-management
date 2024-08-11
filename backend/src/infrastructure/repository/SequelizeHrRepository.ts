import { HrRepository } from "@application/interface/HrRepository";
import { Hr } from "@domain/entities/Hr";
import HrModel from "@infrastructure/models/HrModel";



export class SequelizeHrRepository implements HrRepository{
    async checkHr(email: string): Promise<Hr | null> {
        try {
            const response = await HrModel.findOne({where:{email}})
            if(response){
                return response
            }
            return null
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async saveOtp(otp: string, id:number): Promise<any> {
        try {
            await HrModel.update({otp:otp}, {where:{hr_id:id}})
        } catch (error:any) {
            throw new Error(error)
        }
    }
  async  hrLogin(email: string): Promise<any> {
        return null
    }
}