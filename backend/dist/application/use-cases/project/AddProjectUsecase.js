"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProjectUsecase = void 0;
class AddProjectUsecase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async execute(projectDetails) {
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
}
exports.AddProjectUsecase = AddProjectUsecase;
