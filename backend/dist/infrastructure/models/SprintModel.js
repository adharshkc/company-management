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
const IssueModel_1 = __importDefault(require("./IssueModel"));
const CommentModel_1 = __importDefault(require("./CommentModel"));
let SprintModel = class SprintModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })
], SprintModel.prototype, "sprint_id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: false })
], SprintModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: true })
], SprintModel.prototype, "startDate", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: true })
], SprintModel.prototype, "endDate", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM("start", "completed", "pending"),
        defaultValue: "start",
        allowNull: false,
    })
], SprintModel.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING),
        defaultValue: ["Todo", "In Progress", "Done"],
    })
], SprintModel.prototype, "columns", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ProjectModel_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], SprintModel.prototype, "project_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ProjectModel_1.default)
], SprintModel.prototype, "project", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => IssueModel_1.default)
], SprintModel.prototype, "issues", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => CommentModel_1.default)
], SprintModel.prototype, "comments", void 0);
SprintModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Sprint",
        timestamps: true,
        modelName: "SprintModel",
    })
], SprintModel);
exports.default = SprintModel;
