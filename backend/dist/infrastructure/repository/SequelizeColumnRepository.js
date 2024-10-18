"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeColumnRepository = void 0;
const ColumnModel_1 = __importDefault(require("@infrastructure/models/ColumnModel"));
const SprintModel_1 = __importDefault(require("@infrastructure/models/SprintModel"));
class SequelizeColumnRepository {
    async newColumn(colDetails) {
        try {
            const newColumn = await ColumnModel_1.default.create({
                name: colDetails.name,
                order: colDetails.order,
                sprint_id: colDetails.sprint_id,
            });
            return newColumn;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getColumns(project_id) {
        try {
            const sprint = await SprintModel_1.default.findOne({
                where: { project_id: project_id, status: "pending" },
            });
            const columns = await ColumnModel_1.default.findAll({
                where: { sprint_id: sprint === null || sprint === void 0 ? void 0 : sprint.sprint_id },
            });
            return columns;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateOrder(columns) {
        try {
            for (const col of columns) {
                await ColumnModel_1.default.update({
                    name: col.name,
                    order: col.order,
                    sprint_id: col.sprint_id
                }, {
                    where: { column_id: col.column_id }
                });
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getSingleColumn(sprint_id) {
        try {
            const columns = await ColumnModel_1.default.findOne({
                where: { sprint_id: sprint_id },
            });
            return columns;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getColumnsBySprint(sprint_id) {
        try {
            const columns = await ColumnModel_1.default.findAll({
                where: { sprint_id: sprint_id },
                raw: true
            });
            return columns;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async deleteColumn(column_id) {
        try {
            const column = await ColumnModel_1.default.destroy({ where: { column_id: column_id } });
            return column;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SequelizeColumnRepository = SequelizeColumnRepository;
