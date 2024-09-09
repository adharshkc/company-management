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
const SprintModel_1 = __importDefault(require("./SprintModel"));
const CommentModel_1 = __importDefault(require("./CommentModel"));
const EmployeeModel_1 = __importDefault(require("./EmployeeModel"));
let IssueModel = class IssueModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })
], IssueModel.prototype, "issue_id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: false })
], IssueModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
        defaultValue: "todo",
    })
], IssueModel.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT, allowNull: true,
    })
], IssueModel.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => EmployeeModel_1.default),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })
], IssueModel.prototype, "assignee_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => SprintModel_1.default),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, onDelete: 'CASCADE' })
], IssueModel.prototype, "sprint_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => EmployeeModel_1.default)
], IssueModel.prototype, "assignee", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => SprintModel_1.default)
], IssueModel.prototype, "sprint", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => CommentModel_1.default)
], IssueModel.prototype, "comments", void 0);
IssueModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Issue",
        timestamps: true,
        modelName: "IssueModel",
    })
], IssueModel);
exports.default = IssueModel;
