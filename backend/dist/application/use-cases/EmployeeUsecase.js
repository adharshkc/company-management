"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeUsecase = void 0;
class EmployeeUsecase {
    constructor(employeeRepository, otpManager, nodeMailer, createToken) {
        this.employeeRepository = employeeRepository;
        this.otpManager = otpManager;
        this.nodeMailer = nodeMailer;
        this.createToken = createToken;
    }
    async Login(email) {
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
    async verifyOtp(otp, email) {
        var _a;
        try {
            console.log(email);
            const employee = await this.employeeRepository.checkEmployee(email);
            console.log(employee);
            if (!employee) {
                return {
                    status: 404,
                    data: {
                        success: false,
                        message: "Employee not found",
                    },
                };
            }
            const user_id = (_a = employee.user_id) === null || _a === void 0 ? void 0 : _a.toString();
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
            const accessToken = await this.createToken.createAccessToken(employee.employee_id, employee.user_id, role);
            return {
                status: 200,
                data: {
                    success: true,
                    employee,
                    accessToken,
                },
            };
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.EmployeeUsecase = EmployeeUsecase;
