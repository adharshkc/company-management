"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SprintController = void 0;
class SprintController {
    constructor(addSprint, getSprint, updateSprint) {
        this.addSprint = addSprint;
        this.getSprint = getSprint;
        this.updateSprint = updateSprint;
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
            const { status, data } = await this.getSprint.execute();
            console.log("data", data);
            res.status(status).json(data);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
    async sprintUpdate(req, res, next) {
        var _a;
        try {
            const { name, startDate, endDate } = req === null || req === void 0 ? void 0 : req.body;
            console.log(name, startDate, endDate);
            const sprintId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
            console.log(sprintId);
            const { status, data } = await this.updateSprint.execute(name, startDate, endDate, sprintId);
            res.status(status).json(data);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
}
exports.SprintController = SprintController;
