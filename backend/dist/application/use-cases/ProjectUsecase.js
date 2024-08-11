"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUsecase = void 0;
class ProjectUsecase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async createProject(projectDetails) {
        try {
            const newProject = await this.projectRepository.createProject(projectDetails);
            console.log(newProject);
            if (newProject) {
                return {
                    status: 200,
                    data: {
                        success: true,
                        newProject,
                    },
                };
            }
            else {
                return {
                    status: 500,
                    data: {
                        success: false,
                        message: "Error creating project",
                    },
                };
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }
    async getProjects() {
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
exports.ProjectUsecase = ProjectUsecase;
