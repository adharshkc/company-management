"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminModel_1 = __importDefault(require("@infrastructure/models/AdminModel"));
const UserModel_1 = __importDefault(require("@infrastructure/models/UserModel"));
UserModel_1.default.hasOne(AdminModel_1.default, { foreignKey: 'userId' });
AdminModel_1.default.belongsTo(UserModel_1.default, { foreignKey: 'userId' });
exports.default = {
    UserModel: UserModel_1.default,
    AdminModel: AdminModel_1.default
};
