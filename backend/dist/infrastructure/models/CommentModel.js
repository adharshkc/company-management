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
const EmployeeModel_1 = __importDefault(require("./EmployeeModel"));
const IssueModel_1 = __importDefault(require("./IssueModel"));
const SprintModel_1 = __importDefault(require("./SprintModel"));
let CommentModel = class CommentModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })
], CommentModel.prototype, "comment_id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT })
], CommentModel.prototype, "content", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => EmployeeModel_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], CommentModel.prototype, "commented_by", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => IssueModel_1.default),
    (0, sequelize_typescript_1.ForeignKey)(() => SprintModel_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], CommentModel.prototype, "commentable_id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('issue', 'sprint'),
        allowNull: false
    })
], CommentModel.prototype, "commentable_type", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => SprintModel_1.default),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })
], CommentModel.prototype, "sprint_id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ENUM('issue', 'sprint'), allowNull: false })
], CommentModel.prototype, "comment_type", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => EmployeeModel_1.default)
], CommentModel.prototype, "employee", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => IssueModel_1.default, {
        foreignKey: 'commentable_id',
        constraints: false,
        scope: {
            commentable_type: 'issue'
        }
    })
], CommentModel.prototype, "issue", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => SprintModel_1.default, {
        foreignKey: 'commentable_id',
        constraints: false,
        scope: {
            commentable_type: 'sprint'
        }
    })
], CommentModel.prototype, "sprint", void 0);
CommentModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Comment",
        timestamps: true,
        modelName: "CommentModel",
    })
], CommentModel);
exports.default = CommentModel;
