"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStatusUsecase = void 0;
class ChangeStatusUsecase {
    constructor(sprintRepository) {
        this.sprintRepository = sprintRepository;
    }
    async execute(status, sprintId) {
        try {
            const sprint = await this.sprintRepository.changeSprintStatus(status, sprintId);
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
exports.ChangeStatusUsecase = ChangeStatusUsecase;
