"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
class EmployeeController {
    constructor(employeeUsecase) {
        this.employeeUseCase = employeeUsecase;
    }
    async login(req, res, next) {
        try {
            const email = req.body.email;
            console.log(req.body);
            const result = await this.employeeUseCase.Login(email);
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async verifyOtp(req, res, next) {
        try {
            const { email, otp } = req.body;
            console.log(email);
            const result = await this.employeeUseCase.verifyOtp(otp, email);
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.EmployeeController = EmployeeController;
