"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUsecase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class AdminUsecase {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    adminLogin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield this.adminRepository.adminLoginCheck(email);
                if (admin) {
                    const hashedPassword = yield bcrypt_1.default.compare(password, admin.password);
                    if (hashedPassword) {
                        return admin;
                    }
                    else {
                        console.log("password is incorrect");
                        return null;
                    }
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.log("admin not found", error);
                return null;
            }
        });
    }
}
exports.AdminUsecase = AdminUsecase;
