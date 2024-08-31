"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSprintUsecase = void 0;
class AddSprintUsecase {
    constructor(sprintRepository) {
        this.sprintRepository = sprintRepository;
    }
    async execute(sprintDetails) {
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
exports.AddSprintUsecase = AddSprintUsecase;
