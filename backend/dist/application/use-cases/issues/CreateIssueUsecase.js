"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIssueUsecase = void 0;
class CreateIssueUsecase {
    constructor(issueRepository) {
        this.issueRepository = issueRepository;
    }
    async execute(name, sprintId) {
        try {
            console.log(name);
            const issue = await this.issueRepository.createIssue(name, sprintId);
            if (!issue) {
                return {
                    status: 500,
                    data: {
                        success: false,
                        message: "Error creating Issues"
                    }
                };
            }
            return {
                status: 200,
                data: {
                    success: true,
                    issue
                }
            };
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}
exports.CreateIssueUsecase = CreateIssueUsecase;
