"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeEmployeeRepository = void 0;
const EmployeeModel_1 = __importDefault(require("@infrastructure/models/EmployeeModel"));
class SequelizeEmployeeRepository {
    async checkEmployee(email) {
        try {
            const employee = await EmployeeModel_1.default.findOne({ where: { email } });
            return employee;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SequelizeEmployeeRepository = SequelizeEmployeeRepository;
