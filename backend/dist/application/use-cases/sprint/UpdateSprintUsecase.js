"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSprintUsecase = void 0;
class UpdateSprintUsecase {
    constructor(sprintRepository) {
        this.sprintRepository = sprintRepository;
    }
    async execute(name, startDate, endDate, sprintId) {
        try {
            const sprint = await this.sprintRepository.updateSprint(name, startDate, endDate, sprintId);
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
exports.UpdateSprintUsecase = UpdateSprintUsecase;
