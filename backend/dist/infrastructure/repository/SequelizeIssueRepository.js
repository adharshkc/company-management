"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeIssueRepository = void 0;
const EmployeeModel_1 = __importDefault(require("@infrastructure/models/EmployeeModel"));
const IssueModel_1 = __importDefault(require("@infrastructure/models/IssueModel"));
const SprintModel_1 = __importDefault(require("@infrastructure/models/SprintModel"));
class SequelizeIssueRepository {
    async createIssue(name, sprintId) {
        try {
            const issue = await IssueModel_1.default.create({
                name: name,
                sprint_id: sprintId,
            });
            return issue;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getIssues(sprintId) {
        try {
            const issues = await IssueModel_1.default.findAll({
                where: { sprint_id: sprintId },
                order: [['createdAt', 'ASC']],
                include: [
                    {
                        model: EmployeeModel_1.default,
                        as: "assignee",
                        attributes: ["name"]
                    },
                    {
                        model: SprintModel_1.default,
                        as: "sprint",
                        attributes: ["name"]
                    }
                ]
            });
            return issues;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateName(issueName, issue_id) {
        try {
            const issue = await IssueModel_1.default.update({
                name: issueName,
            }, { where: { issue_id: issue_id }, returning: true });
            return issue;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateStatus(issueStatus, issue_id) {
        try {
            const issue = await IssueModel_1.default.update({
                status: issueStatus,
            }, { where: { issue_id: issue_id }, returning: true });
            return issue;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateDescription(description, issue_id) {
        try {
            const issue = await IssueModel_1.default.update({
                description: description,
            }, { where: { issue_id: issue_id }, });
            return issue;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SequelizeIssueRepository = SequelizeIssueRepository;
