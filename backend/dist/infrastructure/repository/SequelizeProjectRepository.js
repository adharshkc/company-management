"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeProjectRepository = void 0;
const EmployeeModel_1 = __importDefault(require("@infrastructure/models/EmployeeModel"));
const ProjectModel_1 = __importDefault(require("@infrastructure/models/ProjectModel"));
const TeamModel_1 = __importDefault(require("@infrastructure/models/TeamModel"));
class SequelizeProjectRepository {
    async createProject(project) {
        console.log(project.startDate);
        try {
            const newProject = await ProjectModel_1.default.create({
                name: project.name,
                priority: project.priority,
                startDate: project.startDate,
                team_id: project.team_id,
            });
            if (newProject) {
                return newProject;
            }
            return null;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async getProjects() {
        try {
            const projects = await ProjectModel_1.default.findAll({
                include: [
                    {
                        model: TeamModel_1.default,
                        attributes: ["team_id", "name"],
                    },
                ],
            });
            console.log(projects);
            if (projects) {
                return projects;
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async getSingleProject(employee_id) {
        console.log(employee_id);
        try {
            const employee = await EmployeeModel_1.default.findOne({ where: { employee_id: employee_id } });
            console.log(employee);
            const project = await ProjectModel_1.default.findOne({ where: { team_id: employee === null || employee === void 0 ? void 0 : employee.team_id } });
            console.log(project);
            return project;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}
exports.SequelizeProjectRepository = SequelizeProjectRepository;
