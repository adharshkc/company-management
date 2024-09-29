"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnController = void 0;
class ColumnController {
    constructor(newColumnUsecase, getColumnUsecase) {
        this.newColumnUsecase = newColumnUsecase;
        this.getColumnUsecase = getColumnUsecase;
    }
    async newColumn(req, res, next) {
        try {
            const column = req.body;
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
}
exports.ColumnController = ColumnController;
