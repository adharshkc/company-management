"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SprintController = void 0;
class SprintController {
    constructor(addSprint, getSprint, updateSprint, deleteSprint, getAllStartedSprints) {
        this.addSprint = addSprint;
        this.getSprint = getSprint;
        this.updateSprint = updateSprint;
        this.deleteSprint = deleteSprint;
        this.getAllStartedSprints = getAllStartedSprints;
    }
    async createSprint(req, res, next) {
        try {
            const sprint = {
                name: req.body.name,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                status: req.body.status,
                project_id: req.body.project_id,
            };
            const { userId } = req === null || req === void 0 ? void 0 : req.employee;
            const { status, data } = await this.addSprint.execute(sprint, userId);
            res.status(status).json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async getAllSprint(req, res, next) {
        try {
            console.log("hasdfh");
            const project_id = req.params.projectId;
            const { status, data } = await this.getSprint.execute(parseInt(project_id));
            console.log("data", data);
            res.status(status).json(data);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
    async getStartedSprints(req, res, next) {
        try {
            const project_id = req.params.projectId;
            const { status, data } = await this.getAllStartedSprints.execute(parseInt(project_id));
            res.status(status).json(data);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
    async sprintUpdate(req, res, next) {
        try {
            const { name, startDate, endDate, sprintId } = req === null || req === void 0 ? void 0 : req.body;
            console.log(name, startDate, endDate);
            const { status, data } = await this.updateSprint.execute(name, startDate, endDate, sprintId);
            res.status(status).json(data);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
    async sprintDelete(req, res, next) {
        try {
            const sprintId = req === null || req === void 0 ? void 0 : req.params.id;
            console.log(sprintId);
            const { status, data } = await this.deleteSprint.execute(sprintId);
            res.status(status).json(data);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
}
exports.SprintController = SprintController;
