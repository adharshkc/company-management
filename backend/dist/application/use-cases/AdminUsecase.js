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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUsecase = void 0;
class AdminUsecase {
    constructor(adminRepository, hashPassword, createToken) {
        this.hashPassword = hashPassword;
        this.adminRepository = adminRepository;
        this.createToken = createToken;
    }
    adminLogin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield this.adminRepository.adminLoginCheck(email);
                if (admin) {
                    const matchedPassword = yield this.hashPassword.compare(password, admin.password);
                    if (matchedPassword) {
                        const role = 'admin';
                        const accessToken = yield this.createToken.createAccessToken(admin.adminId, admin.userId, role);
                        const refreshToken = yield this.createToken.createRefreshToken(admin.adminId, role);
                        console.log();
                        return {
                            status: 200,
                            data: {
                                success: true,
                                admin,
                                accessToken,
                                refreshToken
                            }
                        };
                    }
                    else {
                        return {
                            status: 401,
                            data: {
                                success: false,
                                message: "incorrect passowrd"
                            }
                        };
                    }
                }
                else {
                    return {
                        status: 401,
                        data: {
                            success: false,
                            message: "admin not found"
                        }
                    };
                }
            }
            catch (error) {
                console.log("admin not found", error.message);
                throw new Error(error.message);
            }
        });
    }
    getAdmin(adminId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield this.adminRepository.getAdmin(adminId);
                console.log(admin);
                return {
                    status: 200,
                    data: {
                        success: true,
                        admin
                    }
                };
            }
            catch (error) {
                console.log("admin not found", error.message);
                throw new Error(error.message);
            }
        });
    }
    addHr(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hr = yield this.adminRepository.addHr(data);
                console.log(hr);
            }
            catch (error) {
            }
        });
    }
}
exports.AdminUsecase = AdminUsecase;
