"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
class EmployeeController {
    constructor(loginUsecase, verifyOtp) {
        this.loginUsecase = loginUsecase;
        this.verifyOtp = verifyOtp;
    }
    async login(req, res, next) {
        try {
            const email = req.body.email;
            console.log(req.body);
            const result = await this.loginUsecase.execute(email);
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async otpVerify(req, res, next) {
        try {
            const { email, otp } = req.body;
            console.log(email);
            const result = await this.verifyOtp.execute(otp, email);
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async checkSession(req, res, next) {
        console.log("hdf");
        return res.status(200).json({ data: { success: true, message: "Session is valid" } });
    }
}
exports.EmployeeController = EmployeeController;
