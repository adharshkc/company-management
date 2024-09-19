"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
class ProjectController {
    constructor(addProject, getProject, getSingleProject) {
        this.addProject = addProject;
        this.getProject = getProject;
        this.getSingleProject = getSingleProject;
    }
    async createProject(req, res, next) {
        // const project = req.body;
        const project = {
            name: req.body.name,
            priority: req.body.priority,
            team_id: parseInt(req.body.team_id),
            startDate: req.body.startDate,
        };
        console.log("eke", project);
        try {
            const result = await this.addProject.execute(project);
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async getProjects(req, res, next) {
        console.log("hello");
        try {
            const result = await this.getProject.execute();
            console.log(result);
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async getProjectByTeamId(req, res, next) {
        var _a;
        try {
            const employeeId = (_a = req.employee) === null || _a === void 0 ? void 0 : _a.userId;
            console.log(req.employee);
            const { status, data } = await this.getSingleProject.execute(parseInt(employeeId));
            res.status(status).json(data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ProjectController = ProjectController;
