"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeHrRepository = void 0;
const EmployeeModel_1 = __importDefault(require("@infrastructure/models/EmployeeModel"));
const HrModel_1 = __importDefault(require("@infrastructure/models/HrModel"));
const UserModel_1 = __importDefault(require("@infrastructure/models/UserModel"));
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
    async addEmployee(data) {
        try {
            console.log(data);
            const newEmployee = await UserModel_1.default.create({ role: data.role });
            console.log(newEmployee);
            if (newEmployee) {
                try {
                    const result = await EmployeeModel_1.default.create({
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        joiningDate: data.joiningDate,
                        user_id: newEmployee.user_id,
                        role: data.role,
                        team_id: 1
                    });
                    console.log(result);
                    return result;
                }
                catch (error) {
                    console.log(error);
                    throw new Error;
                }
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
    async checkEmployee(email) {
        try {
            const employee = await EmployeeModel_1.default.findOne({ where: { email: email } });
            return employee === null || employee === void 0 ? void 0 : employee.email;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getEmployees() {
        try {
            const employees = await EmployeeModel_1.default.findAll();
            return employees;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SequelizeHrRepository = SequelizeHrRepository;
