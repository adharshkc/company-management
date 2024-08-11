"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpManager = void 0;
const redis_1 = require("@infrastructure/database/redis");
class OtpManager {
    generateOtp() {
        const digits = '0123456789';
        let otp = '';
        for (let i = 0; i < 6; i++) {
            otp += digits[Math.floor(Math.random() * 10)];
        }
        return otp;
    }
    async saveOtp(otp, userId) {
        const client = (0, redis_1.getRedisClient)();
        try {
            await client.set(userId, otp, { EX: 600 });
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async checkOtp(otp, userId) {
        const client = (0, redis_1.getRedisClient)();
        try {
            const otpRecord = await client.get(userId);
            if (!otpRecord) {
                return null;
            }
            const isMatch = otp === otpRecord;
            if (isMatch) {
                await client.del(userId);
            }
            return isMatch;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.OtpManager = OtpManager;
