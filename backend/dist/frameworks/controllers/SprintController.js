"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SprintController = void 0;
class SprintController {
    constructor(addSprint) {
        this.addSprint = addSprint;
    }
    async createSprint(req, res, next) {
        try {
            const sprint = {
                name: req.body.name,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                status: req.body.status,
                project_id: req.body.project_id
            };
            const { status, data } = await this.addSprint.execute(sprint);
            res.status(status).json(data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.SprintController = SprintController;
