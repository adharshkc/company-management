"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
class AdminController {
    constructor(loginAdmin) {
        this.adminUsecase = loginAdmin;
    }
    async adminLogin(req, res, next) {
        try {
            const { email, password } = req.body;
            console.log(email, password);
            const result = await this.adminUsecase.adminLogin(email, password);
            console.log(result.status);
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
            console.log(error);
        }
    }
    async getAdmin(req, res, next) {
        try {
            const payload = req.adminId;
            const adminId = payload === null || payload === void 0 ? void 0 : payload.userId;
            console.log(adminId);
            const result = await this.adminUsecase.getAdmin(parseInt(adminId));
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
            console.log(error);
        }
    }
    async createHr(req, res, next) {
        try {
            const data = req.body;
            const result = await this.adminUsecase.addHr(data);
            console.log(result);
            res.status(result.status).json(result.data);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
}
exports.AdminController = AdminController;
