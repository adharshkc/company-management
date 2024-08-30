"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyOtpUsecase = void 0;
class VerifyOtpUsecase {
    constructor(employeeRepository, otpManager, createToken) {
        this.employeeRepository = employeeRepository;
        this.otpManager = otpManager;
        this.createToken = createToken;
    }
    async execute(otp, email) {
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
exports.VerifyOtpUsecase = VerifyOtpUsecase;
