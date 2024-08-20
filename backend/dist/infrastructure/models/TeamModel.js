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
const ProjectModel_1 = __importDefault(require("./ProjectModel"));
const EmployeeModel_1 = __importDefault(require("./EmployeeModel"));
let TeamModel = class TeamModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })
], TeamModel.prototype, "team_id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: false })
], TeamModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ProjectModel_1.default)
], TeamModel.prototype, "projects", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => EmployeeModel_1.default)
], TeamModel.prototype, "employee", void 0);
TeamModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Team",
        timestamps: false,
        modelName: "TeamModel",
    })
], TeamModel);
exports.default = TeamModel;
