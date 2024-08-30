"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProjectsUsecase = void 0;
class GetProjectsUsecase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async execute() {
        try {
            const response = await this.projectRepository.getProjects();
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
exports.GetProjectsUsecase = GetProjectsUsecase;
