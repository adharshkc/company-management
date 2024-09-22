"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDescriptionUsecase = void 0;
class UpdateDescriptionUsecase {
    constructor(issueRepository) {
        this.issueRepository = issueRepository;
    }
    async execute(issueDescription, issue_id) {
        try {
            const issues = await this.issueRepository.updateDescription(issueDescription, issue_id);
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
exports.UpdateDescriptionUsecase = UpdateDescriptionUsecase;
