"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProjects = void 0;
class GetProjects {
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
exports.GetProjects = GetProjects;
