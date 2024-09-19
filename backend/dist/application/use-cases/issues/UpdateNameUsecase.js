"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNameUsecase = void 0;
class UpdateNameUsecase {
    constructor(issueRepository) {
        this.issueRepository = issueRepository;
    }
    async execute(issueName, issue_id) {
        try {
            const issues = await this.issueRepository.updateName(issueName, issue_id);
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
exports.UpdateNameUsecase = UpdateNameUsecase;
