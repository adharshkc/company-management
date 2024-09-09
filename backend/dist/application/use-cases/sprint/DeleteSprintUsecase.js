"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSprintUsecase = void 0;
class DeleteSprintUsecase {
    constructor(sprintRepository) {
        this.sprintRepository = sprintRepository;
    }
    async execute(sprintId) {
        try {
            const sprint = await this.sprintRepository.deleteSprint(sprintId);
            console.log(sprint);
            if (!sprint) {
                return {
                    status: 500,
                    data: {
                        success: false,
                        message: "Something went wrong...",
                    },
                };
            }
            return {
                status: 200,
                data: {
                    success: true,
                    sprint,
                },
            };
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.DeleteSprintUsecase = DeleteSprintUsecase;
