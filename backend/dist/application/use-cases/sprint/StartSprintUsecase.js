"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartSprintUsecase = void 0;
class StartSprintUsecase {
    constructor(sprintRepository) {
        this.sprintRepository = sprintRepository;
    }
    async execute(status, sprintId, project_id) {
        try {
            const sprint = await this.sprintRepository.startSprint(status, sprintId, project_id);
            if (!sprint) {
                return {
                    status: 500,
                    data: {
                        success: false,
                        message: "Something went wrong..."
                    }
                };
            }
            return {
                status: 200,
                data: {
                    success: true,
                    sprint
                }
            };
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.StartSprintUsecase = StartSprintUsecase;
