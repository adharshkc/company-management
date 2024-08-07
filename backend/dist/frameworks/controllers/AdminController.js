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
exports.AdminController = void 0;
class AdminController {
    constructor(loginAdmin) {
        this.adminUsecase = loginAdmin;
    }
    adminLogin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                console.log(email, password);
                const result = yield this.adminUsecase.adminLogin(email, password);
                console.log(result.status);
                res.status(result.status).json(result.data);
            }
            catch (error) {
                next(error);
                console.log(error);
            }
        });
    }
    getAdmin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.adminId;
                const adminId = payload === null || payload === void 0 ? void 0 : payload.userId;
                console.log(adminId);
                const result = yield this.adminUsecase.getAdmin(parseInt(adminId));
                res.status(result.status).json(result.data);
            }
            catch (error) {
                next(error);
                console.log(error);
            }
        });
    }
}
exports.AdminController = AdminController;
