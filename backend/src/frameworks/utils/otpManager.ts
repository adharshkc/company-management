import { OtpRepository } from "@application/interface/OtpRepository";
import { getRedisClient } from "@infrastructure/database/redis";



export class OtpManager implements OtpRepository{
     generateOtp(): string {
        const digits = '0123456789';
        let otp =''
        for(let i =0;i<6;i++){
            otp += digits[Math.floor(Math.random() * 10)];
        }
        return otp
    }

   async saveOtp(otp:string, userId:string):Promise<void>{
        const client = getRedisClient()
        try {
            await client.set(userId, otp,{EX: 600})
        } catch (error:any) {
            console.log(error)
            throw new Error(error)
        }
    }

    async checkOtp(otp:string, userId:string):Promise<boolean|null>{
         const client = getRedisClient()
         try {
            const otpRecord = await client.get(userId)
            if(!otpRecord){
                return null
            }
            const isMatch = otp===otpRecord
            if(isMatch){
                await client.del(userId)
            }
            return isMatch
         } catch (error:any) {
            throw new Error(error)
         }
    }
}