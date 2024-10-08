"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrUsecase = void 0;
class HrUsecase {
    constructor(hrRepository, nodeMailer, otpManager, createToken, teamRepository) {
        this.hrRepository = hrRepository;
        this.nodeMailer = nodeMailer;
        this.otpManager = otpManager;
        this.createToken = createToken;
        this.teamRepository = teamRepository;
    }
    async hrLogin(email) {
        var _a;
        try {
            const hr = await this.hrRepository.checkHr(email);
            console.log(hr);
            if (!hr) {
                return {
                    status: 404,
                    data: {
                        success: false,
                        message: "hr not found",
                    },
                };
            }
            const otp = this.otpManager.generateOtp();
            console.log(otp);
            const from = "codilary.solutions@gmail.com";
            const to = hr.email;
            const user_id = (_a = hr.user_id) === null || _a === void 0 ? void 0 : _a.toString();
            const subject = "Login Otp";
            const html = `<p>Dear <strong>${hr.name}</strong>,</p>
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
                        message: "Failed to sent email",
                    },
                };
            }
            await this.otpManager.saveOtp(otp, user_id);
            return {
                status: 200,
                data: {
                    success: true,
                    message: "Email sent ",
                },
            };
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async verifyOtp(otp, email) {
        var _a;
        try {
            const hr = await this.hrRepository.checkHr(email);
            if (!hr) {
                return {
                    status: 404,
                    data: {
                        success: false,
                        message: "Hr not found",
                    },
                };
            }
            const user_id = (_a = hr.user_id) === null || _a === void 0 ? void 0 : _a.toString();
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
            const role = "hr";
            const accessToken = await this.createToken.createAccessToken(hr.hr_id, hr.user_id, role);
            const refreshToken = await this.createToken.createRefreshToken(hr.hr_id, hr.user_id, role);
            return {
                status: 200,
                data: {
                    success: true,
                    hr,
                    accessToken,
                    refreshToken,
                },
            };
        }
        catch (error) {
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
    async getHr(hr_id) {
        const hr = await this.hrRepository.getHr(hr_id);
        return {
            status: 200,
            data: {
                success: true,
                hr,
            },
        };
    }
    async createEmployee(data) {
        try {
            const existingEmployee = await this.hrRepository.checkEmployee(data.email);
            if (existingEmployee) {
                console.log("hello");
                throw new Error("Employee Already exists");
            }
            const employee = await this.hrRepository.addEmployee(data);
            console.log(employee);
            if (employee) {
                const accessToken = await this.createToken.createAccessToken(employee.employee_id, employee.user_id, employee.role);
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
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getAllEmployees() {
        try {
            const employees = await this.hrRepository.getEmployees();
            if (employees) {
                return {
                    status: 200,
                    data: {
                        success: true,
                        employees,
                    },
                };
            }
            return {
                status: 500,
                data: {
                    success: false,
                    message: "could not retrieve the data",
                },
            };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async createTeam(name) {
        try {
            const team = await this.teamRepository.addTeam(name);
            return {
                status: 200,
                data: {
                    success: true,
                    team,
                },
            };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getAllTeams() {
        try {
            const teams = await this.teamRepository.getTeams();
            return {
                status: 200,
                data: {
                    success: true,
                    teams
                }
            };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.HrUsecase = HrUsecase;
