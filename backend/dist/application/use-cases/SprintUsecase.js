"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SprintUsecase = void 0;
class SprintUsecase {
    constructor(sprintRepository) {
        this.sprintRepository = sprintRepository;
    }
    async createSprint(sprintDetails) {
        try {
            const newSprint = await this.sprintRepository.createSprint(sprintDetails);
            if (!newSprint) {
                return { status: 500,
                    data: {
                        success: false,
                        message: "Error creating sprint"
                    } };
            }
            return {
                status: 200,
                data: {
                    success: true,
                    newSprint
                }
            };
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SprintUsecase = SprintUsecase;
