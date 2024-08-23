import { EmployeeRepository } from "@application/interface/EmployeeRepository";
import { MailerRepository } from "@application/interface/MailerRepository";
import { OtpRepository } from "@application/interface/OtpRepository";
import { TokenRepository } from "@application/interface/TokenRepository";
import { IEmployee } from "@domain/entities/Employee";

export class EmployeeUsecase {
  private employeeRepository: EmployeeRepository;
  private otpManager: OtpRepository;
  private nodeMailer: MailerRepository;
  private createToken: TokenRepository;
  constructor(
    employeeRepository: EmployeeRepository,
    otpManager: OtpRepository,
    nodeMailer: MailerRepository,
    createToken: TokenRepository
  ) {
    this.employeeRepository = employeeRepository;
    this.otpManager = otpManager;
    this.nodeMailer = nodeMailer;
    this.createToken = createToken;
  }

  async Login(email: string) {
    try {
      const employee = await this.employeeRepository.checkEmployee(email);
      if (!employee) {
        return {
          status: 404,
          data: {
            success: false,
            message: "Employee not found",
          },
        };
      }
      const otp = this.otpManager.generateOtp();
      console.log(otp);
      const from = "codilary.solutions@gmail.com";
      const to = employee.email;
      const user_id = employee.user_id?.toString();
      const subject = "Login Otp";
      const html = `<p>Dear <strong>${employee.name}</strong>,</p>
                      <p>Your One-Time Password (OTP) for verifying your account is:</p>
                      <h2>${otp}</h2>
                      <p>Please enter this OTP in the verification screen to complete your registration.</p>
                      <p>This OTP is valid for only 10 minutes. If you did not request this, please ignore this email.</p>
                      <p>Thank you,<br />The Codilary Team</p>
                    `;
      const response = await this.nodeMailer.sendMail(from, to, subject, html);
      if (!response) {
        return {
          status: 500,
          data: {
            success: false,
            message: "Failed to send email",
          },
        };
      }
      await this.otpManager.saveOtp(otp, user_id);
      return {
        status: 200,
        data: {
          success: true,
          message: "Email sent",
        },
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async verifyOtp(otp: string, email: string) {
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
