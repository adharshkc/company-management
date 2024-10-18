"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnController = void 0;
class ColumnController {
    constructor(newColumnUsecase, getColumnUsecase, updateOrderUsecase, deleteColumnUsecase) {
        this.newColumnUsecase = newColumnUsecase;
        this.getColumnUsecase = getColumnUsecase;
        this.updateOrderUsecase = updateOrderUsecase;
        this.deleteColumnUsecase = deleteColumnUsecase;
    }
    async newColumn(req, res, next) {
        try {
            const column = req.body.newColumn;
            console.log(column);
            const { status, data } = await this.newColumnUsecase.execute(column);
            return res.status(status).json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async getColumns(req, res, next) {
        try {
            const projectId = req.params.projectId;
            const { status, data } = await this.getColumnUsecase.execute(parseInt(projectId));
            return res.status(status).json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async updateColumn(req, res, next) {
        try {
            const active = req.body.active;
            const over = req.body.over;
            const sprint_id = req.body.sprint_id;
            if (!sprint_id)
                res.status(400).json("sprint id is empty");
            const { status, data } = await this.updateOrderUsecase.execute(parseInt(active), parseInt(over), parseInt(sprint_id));
            return res.status(status).json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteColumn(req, res, next) {
        try {
            const column_id = req.params.columnId;
            if (!column_id)
                res.status(400).json("column id is empty");
            const { status, data } = await this.deleteColumnUsecase.execute(parseInt(column_id));
            res.status(status).json(data);
        }
        catch (error) {
        }
    }
}
exports.ColumnController = ColumnController;
