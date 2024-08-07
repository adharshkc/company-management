"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUsecase = void 0;
class ProjectUsecase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    createProject(projectDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProject = yield this.projectRepository.createProject(projectDetails);
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
        });
    }
    getProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.projectRepository.getProjects();
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
        });
    }
}
exports.ProjectUsecase = ProjectUsecase;
