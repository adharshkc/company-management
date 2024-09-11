"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIssueUsecase = void 0;
class GetIssueUsecase {
    constructor(issueRepository) {
        this.issueRepository = issueRepository;
    }
    async execute(sprintId) {
        try {
            const issues = await this.issueRepository.getIssues(sprintId);
            return {
                status: 200,
                data: {
                    success: true,
                    issues
                }
            };
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.GetIssueUsecase = GetIssueUsecase;
