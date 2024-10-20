"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLoginUsecase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class AdminLoginUsecase {
    constructor(adminRepository, hashPassword, tokenRepository) {
        this.adminRepository = adminRepository;
        this.hashPassword = hashPassword;
        this.tokenRepository = tokenRepository;
    }
    ;
    async execute(email, password) {
        const admin = await this.adminRepository.adminLoginCheck(email);
        if (!admin) {
            throw new Error("Admin not found");
        }
        const hased_password = await bcrypt_1.default.hash('123456', 10);
        console.log(hased_password);
        const isPasswordMatched = await this.hashPassword.compare(password, admin.password);
        if (!isPasswordMatched) {
            throw new Error("Incorrect password");
        }
        const accessToken = await this.tokenRepository.createAccessToken(admin.adminId, admin.userId, "admin");
        return {
            status: 200,
            data: {
                success: true,
                admin,
                accessToken,
                // refreshToken,
            },
        };
    }
}
exports.AdminLoginUsecase = AdminLoginUsecase;
