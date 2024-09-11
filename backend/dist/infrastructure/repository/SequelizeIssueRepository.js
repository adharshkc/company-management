"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeIssueRepository = void 0;
const IssueModel_1 = __importDefault(require("@infrastructure/models/IssueModel"));
class SequelizeIssueRepository {
    async createIssue(name, sprintId) {
        try {
            const issue = await IssueModel_1.default.create({
                name: name,
                sprint_id: sprintId
            });
            return issue;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getIssues(sprintId) {
        try {
            const issues = await IssueModel_1.default.findAll({ where: { sprint_id: sprintId } });
            return issues;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SequelizeIssueRepository = SequelizeIssueRepository;
