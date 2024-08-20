"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const AdminModel_1 = __importDefault(require("./AdminModel"));
const TodoModel_1 = __importDefault(require("./TodoModel"));
const HrModel_1 = __importDefault(require("./HrModel"));
const EmployeeModel_1 = __importDefault(require("./EmployeeModel"));
let UserModel = class UserModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })
], UserModel.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), allowNull: false })
], UserModel.prototype, "role", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => AdminModel_1.default)
], UserModel.prototype, "admin", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => HrModel_1.default)
], UserModel.prototype, "hr", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => EmployeeModel_1.default)
], UserModel.prototype, "employee", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => TodoModel_1.default)
], UserModel.prototype, "todos", void 0);
UserModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "User",
        timestamps: false,
        modelName: "UserModel",
    })
], UserModel);
exports.default = UserModel;
