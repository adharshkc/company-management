"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeHrRepository = void 0;
const HrModel_1 = __importDefault(require("@infrastructure/models/HrModel"));
class SequelizeHrRepository {
    async checkHr(email) {
        try {
            const response = await HrModel_1.default.findOne({ where: { email } });
            if (response) {
                return response;
            }
            return null;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async saveOtp(otp, id) {
        try {
            await HrModel_1.default.update({ otp: otp }, { where: { hr_id: id } });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async hrLogin(email) {
        return null;
    }
    async getHr(hr_id) {
        try {
            const response = await HrModel_1.default.findOne({ where: { hr_id: hr_id } });
            if (response) {
                return response;
            }
            return null;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SequelizeHrRepository = SequelizeHrRepository;
