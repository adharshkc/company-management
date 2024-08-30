import { HrRepository } from "@application/interface/HrRepository";
import { MailerRepository } from "@application/interface/MailerRepository";
import { TokenRepository } from "@application/interface/TokenRepository";
import { IEmployee } from "@domain/entities/Employee";

export class CreateEmployeeUsecase {
  constructor(
    private hrRepository: HrRepository,
    private createToken: TokenRepository,
    private nodeMailer: MailerRepository
  ) {}
  async execute(data: IEmployee) {
    try {
      const existingEmployee = await this.hrRepository.checkEmployee(
        data.email
      );
      if (existingEmployee) {
        console.log("hello");
        throw new Error("Employee Already exists");
      }
      const employee = await this.hrRepository.addEmployee(data);
      console.log(employee);
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
}
