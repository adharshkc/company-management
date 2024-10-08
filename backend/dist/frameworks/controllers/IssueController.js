"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueController = void 0;
class IssueController {
    constructor(createIssueUsecase, getIssueUsecase, updateNameUsecase, updateStatusUsecase, updateDescriptionUsecase) {
        this.createIssueUsecase = createIssueUsecase;
        this.getIssueUsecase = getIssueUsecase;
        this.updateNameUsecase = updateNameUsecase;
        this.updateStatusUsecase = updateStatusUsecase;
        this.updateDescriptionUsecase = updateDescriptionUsecase;
    }
    async createIssue(req, res, next) {
        try {
            const { name, sprintId } = req.body;
            console.log(req.body);
            if (!name)
                throw new Error("name is required");
            console.log(name);
            const { status, data } = await this.createIssueUsecase.execute(name, sprintId);
            return res.status(status).json(data);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
    async getIssues(req, res, next) {
        try {
            const sprintId = req.params.sprintId;
            console.log(sprintId);
            const { status, data } = await this.getIssueUsecase.execute(sprintId);
            console.log(data.issues.length);
            return res.status(status).json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async updateName(req, res, next) {
        try {
            const issueName = req.body.issueName;
            const issue_id = req.params.issueId;
            const { status, data } = await this.updateNameUsecase.execute(issueName, issue_id);
            return res.status(status).json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async updateStatus(req, res, next) {
        try {
            const issueStatus = req.body.status;
            if (!issueStatus)
                return res.status(400).json({ message: "status is required" });
            const issue_id = req.params.issueId;
            const { status, data } = await this.updateStatusUsecase.execute(issueStatus, issue_id);
            return res.status(status).json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async updateDescription(req, res, next) {
        try {
            const issueDescription = req.body.description;
            console.log(issueDescription);
            const issue_id = req.params.issueId;
            const { status, data } = await this.updateDescriptionUsecase.execute(issueDescription, issue_id);
            return res.status(status).json(data);
        }
        catch (error) {
        }
    }
}
exports.IssueController = IssueController;
