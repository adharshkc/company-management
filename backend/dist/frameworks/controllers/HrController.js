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
            console.log(req.body);
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
            res.cookie('hrToken', result.data.refreshToken, {
                httpOnly: true,
                sameSite: 'none',
                secure: process.env.NODE_ENV !== 'DEVELOPMENT',
                maxAge: 24 * 60 * 60 * 1000,
            });
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async refreshToken(req, res, next) {
        try {
            const payload = req.hr;
            const userId = payload.userId;
            const commonId = payload.commonId;
            const result = await this.hrUsecase.createNewAccessToken(parseInt(userId), parseInt(commonId));
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.HrController = HrController;
