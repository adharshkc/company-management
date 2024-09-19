"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusUsecase = void 0;
class UpdateStatusUsecase {
    constructor(issueRepository) {
        this.issueRepository = issueRepository;
    }
    async execute(issueStatus, issue_id) {
        try {
            const issues = await this.issueRepository.updateStatus(issueStatus, issue_id);
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
exports.UpdateStatusUsecase = UpdateStatusUsecase;
