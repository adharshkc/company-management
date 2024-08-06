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
const TeamModel_1 = __importDefault(require("./TeamModel"));
const CommentModel_1 = __importDefault(require("./CommentModel"));
let ProjectModel = class ProjectModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })
], ProjectModel.prototype, "project_id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: false })
], ProjectModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), allowNull: false })
], ProjectModel.prototype, "priority", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: false })
], ProjectModel.prototype, "dueDate", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT })
], ProjectModel.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => TeamModel_1.default),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], ProjectModel.prototype, "team_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => TeamModel_1.default)
], ProjectModel.prototype, "team", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => CommentModel_1.default, { scope: { commentableType: 'Project' }, foreignKey: 'commentableId' })
], ProjectModel.prototype, "comments", void 0);
ProjectModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Project",
        timestamps: true,
        modelName: 'ProjectModel'
    })
], ProjectModel);
exports.default = ProjectModel;
