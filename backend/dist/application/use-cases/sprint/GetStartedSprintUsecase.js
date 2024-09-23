"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStartedSprintUsecase = void 0;
class GetStartedSprintUsecase {
    constructor(sprintRepository) {
        this.sprintRepository = sprintRepository;
    }
    async execute(project_id) {
        try {
            const sprints = await this.sprintRepository.getStartedSprints(project_id);
            console.log(sprints);
            return {
                status: 200,
                data: {
                    success: true,
                    sprints
                }
            };
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.GetStartedSprintUsecase = GetStartedSprintUsecase;
