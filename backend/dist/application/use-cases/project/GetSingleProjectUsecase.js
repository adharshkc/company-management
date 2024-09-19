"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSingleProjectUsecase = void 0;
class GetSingleProjectUsecase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async execute(employee_id) {
        try {
            const response = await this.projectRepository.getSingleProject(employee_id);
            if (response) {
                return {
                    status: 200,
                    data: {
                        success: true,
                        projects: response
                    }
                };
            }
            else {
                return { status: 404, data: { success: false }
                };
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.GetSingleProjectUsecase = GetSingleProjectUsecase;
