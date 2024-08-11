"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeAdminRepository = void 0;
const Admin_1 = require("@domain/entities/Admin");
const AdminModel_1 = __importDefault(require("@infrastructure/models/AdminModel"));
const UserModel_1 = __importDefault(require("@infrastructure/models/UserModel"));
const HrModel_1 = __importDefault(require("@infrastructure/models/HrModel"));
class SequelizeAdminRepository {
    async adminLoginCheck(email) {
        const admin = await AdminModel_1.default.findOne({ where: { email } });
        console.log(admin, "admin");
        if (admin) {
            return new Admin_1.Admin(admin.name, admin.email, admin.password, admin.dob, admin.gender, admin.phone, admin.userId, admin.admin_id);
        }
        return null;
    }
    async getAdmin(adminId) {
        const admin = await AdminModel_1.default.findOne({ where: { admin_id: adminId } });
        if (admin) {
            return new Admin_1.Admin(admin.name, admin.email, admin.password, admin.dob, admin.gender, admin.phone, admin.userId, admin.admin_id);
        }
        return null;
    }
    async addHr(data) {
        try {
            console.log(data);
            const newHr = await UserModel_1.default.create({ role: 'hr' });
            console.log("new Hr: ", newHr);
            if (newHr) {
                const result = await HrModel_1.default.create({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    joiningDate: data.startDate,
                    user_id: newHr.user_id
                });
                console.log("result", result);
                return result;
            }
            else {
                throw new Error("Error creating user");
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}
exports.SequelizeAdminRepository = SequelizeAdminRepository;
