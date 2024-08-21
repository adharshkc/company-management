import { HrRepository } from "@application/interface/HrRepository";
import { MailerRepository } from "@application/interface/MailerRepository";
import { OtpRepository } from "@application/interface/OtpRepository";
import { TokenRepository } from "@application/interface/TokenRepository";
import { IEmployee } from "@domain/entities/Employee";

export class HrUsecase {
  private hrRepository: HrRepository;
  private nodeMailer: MailerRepository;
  private otpManager: OtpRepository;
  private createToken: TokenRepository;

  constructor(
    hrRepository: HrRepository,
    nodeMailer: MailerRepository,
    otpManager: OtpRepository,
    createToken: TokenRepository
  ) {
    this.hrRepository = hrRepository;
    this.nodeMailer = nodeMailer;
    this.otpManager = otpManager;
    this.createToken = createToken;
  }

  async hrLogin(email: string) {
    try {
      const hr = await this.hrRepository.checkHr(email);
      console.log(hr);
      if (hr) {
        const otp = this.otpManager.generateOtp();
        console.log(otp);

        const from = "codilary.solutions@gmail.com";
        const to = hr.email;
        const user_id = hr.user_id?.toString();
        const subject = "Login Otp";
        const html = `<p>Dear <strong>${hr.name}</strong>,</p>
                <p>Your One-Time Password (OTP) for verifying your account is:</p>
                <h2>${otp}</h2>
                <p>Please enter this OTP in the verification screen to complete your registration.</p>
                <p>This OTP is valid for only 10 minutes. If you did not request this, please ignore this email.</p>
                <p>Thank you,<br />The Codilary Team</p>
              `;
        await this.nodeMailer.sendMail(from, to, subject, html);
        await this.otpManager.saveOtp(otp, user_id);
        return {
          status: 200,
          data: {
            success: true,
            message: "Email sent ",
          },
        };
      } else {
        return {
          status: 404,
          data: {
            success: false,
            message: "hr not found",
          },
        };
      }
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }
  async verifyOtp(otp: string, email: string) {
    try {
      const hr = await this.hrRepository.checkHr(email);
      if (hr) {
        const user_id = hr.user_id?.toString();
        const otpMatch = await this.otpManager.checkOtp(otp, user_id);
        if (otpMatch) {
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
        } else {
          return {
            status: 400,
            data: {
              success: false,
              message: "Incorrect Otp",
            },
          };
        }
      } else {
        return {
          status: 404,
          data: {
            success: false,
            message: "Hr not found",
          },
        };
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }
  // async createNewAccessToken (userId:number, commonId:number){
  //   const role = "hr"
  //   const newAccessToken = await this.createToken.createAccessToken(userId, commonId, role)
  //   return {
  //     status:200,
  //     data:{
  //       success:true,
  //       newAccessToken
  //     }
  //   }
  // }
  async getHr(hr_id: number) {
    const hr = await this.hrRepository.getHr(hr_id);
    return {
      status: 200,
      data: {
        success: true,
        hr,
      },
    };
  }
  async createEmployee(data: IEmployee) {
    try {
      const existingEmployee = await this.hrRepository.checkEmployee(
        data.email
      );
      if (existingEmployee) {
        console.log("hello")
        throw new Error("Employee Already exists");
      }
      const employee = await this.hrRepository.addEmployee(data);
      console.log(employee)
      if (employee) {
        const accessToken = await this.createToken.createAccessToken(
          employee.employee_id,
          employee.user_id,
          employee.role
        );
        const from = "codilary.solutions@gmail.com";
        const to = employee.email;
        const subject = "Welcome mail";
        const html = `
    <p>Welcome <strong>${employee.name}</strong> to Codilary!</p>
    <p>Please click the link below to verify your email address:</p>
    <a href="http://localhost:3000/verify?token=${accessToken}">Verify Email</a>
    <p>If you did not request this email, please ignore it.</p>
  `;
        this.nodeMailer.sendMail(from, to, subject, html);
      }
      return {
        status: 200,
        data: { success: true, employee },
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getAllEmployees (){
    try {
      const employees = await this.hrRepository.getEmployees()
      if(employees){
        return {
          status:200,
          data:{
            success:true,
            employees
          }
        }
      }
      return{
        status:500,
        data:{
          success:false,
          message: "could not retrieve the data"
        }
      }
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }
}