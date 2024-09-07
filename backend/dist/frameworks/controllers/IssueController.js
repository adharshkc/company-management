"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueController = void 0;
class IssueController {
    constructor(createIssueUsecase) {
        this.createIssueUsecase = createIssueUsecase;
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
}
exports.IssueController = IssueController;
