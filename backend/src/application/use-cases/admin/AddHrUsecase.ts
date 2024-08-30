import { AdminRepository } from "@application/interface/AdminRepository";
import { MailerRepository } from "@application/interface/MailerRepository";
import { TokenRepository } from "@application/interface/TokenRepository";
import { Hr } from "@domain/entities/Hr";

export class AddHrUsecase {
  constructor(
    private adminRepository: AdminRepository,
    private tokenRepository: TokenRepository,
    private emailService: MailerRepository
  ) {}

  async execute(data: Hr) {
    try {
      const existingHr = await this.adminRepository.checkHr(data.email);
      if (existingHr) {
        throw new Error("Hr Already exists");
      } else {
        const hr = await this.adminRepository.addHr(data);
        if (hr) {
          const role = "hr";
          const accessToken = await this.tokenRepository.createAccessToken(
            hr.hr_id,
            hr.user_id,
            role
          );
          const from = "codilary.solutions@gmail.com";
          const to = hr.email;
          const subject = "Welcome mail";
          const html = `
              <p>Welcome <strong>${hr.name}</strong> to Codilary!</p>
              <p>Please click the link below to verify your email address:</p>
              <a href="http://localhost:3000/verify?token=${accessToken}">Verify Email</a>
              <p>If you did not request this email, please ignore it.</p>
            `;
          this.emailService.sendMail(from, to, subject, html);
        }
        return {
          status: 200,
          data: {
            success: true,
            hr,
          },
        };
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
