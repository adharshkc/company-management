"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUsecase = void 0;
class LoginUsecase {
    constructor(employeeRepository, otpManager, nodeMailer) {
        this.employeeRepository = employeeRepository;
        this.otpManager = otpManager;
        this.nodeMailer = nodeMailer;
    }
    async execute(email) {
        var _a;
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
            const user_id = (_a = employee.user_id) === null || _a === void 0 ? void 0 : _a.toString();
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
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.LoginUsecase = LoginUsecase;
