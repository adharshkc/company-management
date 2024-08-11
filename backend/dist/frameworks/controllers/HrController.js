"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrController = void 0;
class HrController {
    constructor(hrUsecase) {
        this.hrUsecase = hrUsecase;
    }
    async hrLogin(req, res, next) {
        try {
            const { email } = req.body;
            console.log(email);
            const response = await this.hrUsecase.hrLogin(email);
            return res.status(response.status).json(response.data);
        }
        catch (error) {
            next(error);
        }
    }
    async verifyOtp(req, res, next) {
        try {
            const { email, otp } = req.body;
            const result = await this.hrUsecase.verifyOtp(otp, email);
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.HrController = HrController;
