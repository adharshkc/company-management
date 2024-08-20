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
const UserModel_1 = __importDefault(require("./UserModel"));
const TeamModel_1 = __importDefault(require("./TeamModel"));
let EmployeeModel = class EmployeeModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })
], EmployeeModel.prototype, "employee_id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: false })
], EmployeeModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: false })
], EmployeeModel.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: false })
], EmployeeModel.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: false })
], EmployeeModel.prototype, "role", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE })
], EmployeeModel.prototype, "joiningDate", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => UserModel_1.default),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], EmployeeModel.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => TeamModel_1.default),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], EmployeeModel.prototype, "team_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => UserModel_1.default)
], EmployeeModel.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => TeamModel_1.default)
], EmployeeModel.prototype, "team", void 0);
EmployeeModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Employee",
        timestamps: false,
        modelName: "EmployeeModel"
    })
], EmployeeModel);
exports.default = EmployeeModel;
