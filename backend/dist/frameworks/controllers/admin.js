"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCon = void 0;
class AdminCon {
    constructor(loginAdmin, addHr, getAdmin) {
        this.loginAdmin = loginAdmin;
        this.addHr = addHr;
        this.getAdmin = getAdmin;
    }
    async adminLogin(req, res, next) {
        try {
            const { email, password } = req.body;
            console.log(email, password);
            const result = await this.loginAdmin.execute(email, password);
            console.log(result.status);
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
            const result = await this.addHr.execute(data);
            res.status(result.status).json(result.data);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
    async admin(req, res, next) {
        try {
            const payload = req.adminId;
            const adminId = payload === null || payload === void 0 ? void 0 : payload.userId;
            const result = await this.getAdmin.execute(parseInt(adminId));
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
            console.log(error);
        }
    }
}
exports.AdminCon = AdminCon;
