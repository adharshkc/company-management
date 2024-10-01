"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnController = void 0;
class ColumnController {
    constructor(newColumnUsecase, getColumnUsecase, updateOrderUsecase) {
        this.newColumnUsecase = newColumnUsecase;
        this.getColumnUsecase = getColumnUsecase;
        this.updateOrderUsecase = updateOrderUsecase;
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
            const order = req.body.order;
            const column_id = req.body.columnId;
            if (!column_id)
                res.status(400).json("column id is empty");
            if (!order)
                return res.status(400).json("order is empty");
            const { status, data } = await this.updateOrderUsecase.execute(parseInt(order), parseInt(column_id));
            return res.status(status).json(data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ColumnController = ColumnController;
