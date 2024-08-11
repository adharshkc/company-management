import { MailerRepository } from "@application/interface/MailerRepository";
import nodemailer, { Transporter } from "nodemailer";

class NodeMailer implements MailerRepository {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  async sendMail(
    from: string,
    to: string,
    subject: string,
    html: string
  ): Promise<void> {
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      html: html,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log("email sent successfully");
    } catch (error) {
      console.log(error);
    }
  }
}

export default NodeMailer;
