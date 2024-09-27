"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeSprintRepository = void 0;
const ColumnModel_1 = __importDefault(require("@infrastructure/models/ColumnModel"));
const EmployeeModel_1 = __importDefault(require("@infrastructure/models/EmployeeModel"));
const IssueModel_1 = __importDefault(require("@infrastructure/models/IssueModel"));
const ProjectModel_1 = __importDefault(require("@infrastructure/models/ProjectModel"));
const SprintModel_1 = __importDefault(require("@infrastructure/models/SprintModel"));
const TeamModel_1 = __importDefault(require("@infrastructure/models/TeamModel"));
class SequelizeSprintRepository {
    async createSprint(sprint) {
        try {
            const newSprint = await SprintModel_1.default.create({
                name: sprint.name,
                startDate: sprint === null || sprint === void 0 ? void 0 : sprint.startDate,
                endDate: sprint === null || sprint === void 0 ? void 0 : sprint.endDate,
                status: sprint === null || sprint === void 0 ? void 0 : sprint.status,
                project_id: sprint.project_id,
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
    async getSprints(project_id) {
        try {
            const sprints = await SprintModel_1.default.findAll({
                where: { project_id: project_id },
                include: [{ model: IssueModel_1.default }, { model: ColumnModel_1.default }],
                order: [["createdAt", "ASC"]],
            });
            return sprints;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getProjectId(employee_id) {
        try {
            const employee = await EmployeeModel_1.default.findOne({
                where: { employee_id: employee_id, role: "Team Lead" },
                include: [
                    {
                        model: TeamModel_1.default,
                        include: [
                            {
                                model: ProjectModel_1.default,
                                where: { status: "pending" },
                                attributes: ["project_id"],
                            },
                        ],
                    },
                ],
            });
            if (employee && employee.team && employee.team.projects.length > 0) {
                return employee === null || employee === void 0 ? void 0 : employee.team.projects[0].project_id;
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.log(error);
            throw new Error("You are not authorized");
        }
    }
    async updateSprint(name, startDate, endDate, sprintId) {
        try {
            const [numberOfAffectedRows, [updatedSprint]] = await SprintModel_1.default.update({
                name: name,
                startDate: startDate,
                endDate: endDate,
            }, {
                where: {
                    sprint_id: sprintId,
                },
                returning: true,
            });
            if (numberOfAffectedRows === 0) {
                return null;
            }
            return updatedSprint;
        }
        catch (error) {
            throw new Error("Error updating Sprint");
        }
    }
    async deleteSprint(sprintId) {
        try {
            const sprint = await SprintModel_1.default.destroy({
                where: { sprint_id: sprintId },
            });
            if (sprint) {
                return "success";
            }
            return null;
        }
        catch (error) {
            console.log(error);
            throw new Error("Error deleting Sprint");
        }
    }
    async getStartedSprints(project_id) {
        try {
            const sprints = await SprintModel_1.default.findOne({
                where: { project_id: project_id, status: "pending" },
            });
            return sprints;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async startSprint(status, sprintId, project_id) {
        try {
            const sprints = await SprintModel_1.default.findAll({
                where: { project_id: project_id, },
            });
            const sprint = await SprintModel_1.default.update({
                status: status,
            }, {
                where: { sprint_id: sprintId },
            });
            return sprint;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SequelizeSprintRepository = SequelizeSprintRepository;
