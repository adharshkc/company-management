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
    async updateOrder(order, column_id) {
        try {
            const column = await ColumnModel_1.default.update({
                order: order,
            }, {
                where: { column_id: column_id },
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getSingleColumn(sprint_id) {
        try {
            const columns = await ColumnModel_1.default.findOne({
                where: { sprint_id: sprint_id }
            });
            return columns;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SequelizeColumnRepository = SequelizeColumnRepository;
