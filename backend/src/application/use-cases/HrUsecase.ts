import { HrRepository } from "@application/interface/HrRepository";
import { MailerRepository } from "@application/interface/MailerRepository";
import { OtpRepository } from "@application/interface/OtpRepository";

export class HrUsecase {
  private hrRepository: HrRepository;
  private nodeMailer: MailerRepository;
  private otpManager: OtpRepository;

  constructor(
    hrRepository: HrRepository,
    nodeMailer: MailerRepository,
    otpManager: OtpRepository
  ) {
    this.hrRepository = hrRepository;
    this.nodeMailer = nodeMailer;
    this.otpManager = otpManager;
  }

  async hrLogin(email: string) {
    try {
      const hr = await this.hrRepository.checkHr(email);
      if (hr) {
        const otp = this.otpManager.generateOtp();
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
          return {
            status: 200,
            data: {
              success: true,
              hr,
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
}
