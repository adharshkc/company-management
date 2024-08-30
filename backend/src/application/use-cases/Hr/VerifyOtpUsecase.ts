import { HrRepository } from "@application/interface/HrRepository";
import { OtpRepository } from "@application/interface/OtpRepository";
import { TokenRepository } from "@application/interface/TokenRepository";



export class VerifyOtpUsecase{
    constructor(private hrRepository: HrRepository,
        private createToken: TokenRepository,
        private otpManager: OtpRepository
    ){}
    async execute(otp:string, email:string){
        try {
            const hr = await this.hrRepository.checkHr(email);
            if (!hr) {
              return {
                status: 404,
                data: {
                  success: false,
                  message: "Hr not found",
                },
              };
            }
            const user_id = hr.user_id?.toString();
            const otpMatch = await this.otpManager.checkOtp(otp, user_id);
            if (!otpMatch) {
              return {
                status: 400,
                data: {
                  success: false,
                  message: "Incorrect Otp",
                },
              };
            }
            const role = "hr";
            const accessToken = await this.createToken.createAccessToken(
              hr.hr_id,
              hr.user_id,
              role
            );
            const refreshToken = await this.createToken.createRefreshToken(
              hr.hr_id,
              hr.user_id,
              role
            );
            return {
              status: 200,
              data: {
                success: true,
                hr,
                accessToken,
                refreshToken,
              },
            };
          } catch (error: any) {
            throw new Error(error);
          }
    }
}