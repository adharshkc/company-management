import { EmployeeRepository } from "@application/interface/EmployeeRepository";
import { OtpRepository } from "@application/interface/OtpRepository";
import { TokenRepository } from "@application/interface/TokenRepository";



export class VerifyOtpUsecase{
    constructor(private employeeRepository:EmployeeRepository,
        private otpManager: OtpRepository,
        private createToken: TokenRepository
    ){}
    async execute(otp:string, email:string){
        try {
            console.log(email)
          const employee = await this.employeeRepository.checkEmployee(email);
          console.log(employee)
          if (!employee) {
            return {
              status: 404,
              data: {
                success: false,
                message: "Employee not found",
              },
            };
          }
          const user_id = employee.user_id?.toString();
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
          const role = employee.role;
          const accessToken = await this.createToken.createAccessToken(
            employee.employee_id,
            employee.user_id,
            role
          );
          return {
            status: 200,
            data: {
              success: true,
              employee,
              accessToken,
            },
          };
        } catch (error: any) {
          throw new Error(error);
        }
    }

}