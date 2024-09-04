"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeSprintRepository = void 0;
const SprintModel_1 = __importDefault(require("@infrastructure/models/SprintModel"));
class SequelizeSprintRepository {
    async createSprint(sprint) {
        try {
            // const project = await
            const newSprint = await SprintModel_1.default.create({
                name: sprint.name,
                startDate: sprint === null || sprint === void 0 ? void 0 : sprint.startDate,
                endDate: sprint === null || sprint === void 0 ? void 0 : sprint.endDate,
                status: sprint === null || sprint === void 0 ? void 0 : sprint.status,
                project_id: sprint.project_id
            });
            if (newSprint) {
                return newSprint;
            }
            return null;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getSprints() {
        try {
            const sprints = await SprintModel_1.default.findAll();
            // if(sprints){
            //     return null
            // }
            return sprints;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SequelizeSprintRepository = SequelizeSprintRepository;
