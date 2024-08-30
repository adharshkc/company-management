"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyOtpUsecase = void 0;
class VerifyOtpUsecase {
    constructor(hrRepository, createToken, otpManager) {
        this.hrRepository = hrRepository;
        this.createToken = createToken;
        this.otpManager = otpManager;
    }
    async execute(otp, email) {
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
}
exports.VerifyOtpUsecase = VerifyOtpUsecase;
