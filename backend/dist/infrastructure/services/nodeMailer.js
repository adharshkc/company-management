"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
class NodeMailer {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            service: process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });
    }
    async sendMail(from, to, subject, html) {
        const mailOptions = {
            from: from,
            to: to,
            subject: subject,
            html: html,
        };
        try {
            await this.transporter.sendMail(mailOptions);
            console.log("email sent successfully");
            return { success: true, message: "Email sent successfully" };
        }
        catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }
}
exports.default = NodeMailer;
