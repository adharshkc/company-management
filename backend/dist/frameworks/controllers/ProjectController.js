"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
class ProjectController {
    constructor(projectUsecase) {
        this.projectUsecase = projectUsecase;
    }
    async createProject(req, res, next) {
        // const project = req.body;
        const project = {
            name: req.body.name,
            priority: req.body.priority,
            team_id: parseInt(req.body.team_id),
            startDate: req.body.startDate
        };
        console.log("eke", project);
        try {
            const result = await this.projectUsecase.createProject(project);
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async getProjects(req, res, next) {
        try {
            const result = await this.projectUsecase.getProjects();
            console.log(result);
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ProjectController = ProjectController;
