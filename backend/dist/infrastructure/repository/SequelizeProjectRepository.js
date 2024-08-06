"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeProjectRepository = void 0;
const ProjectModel_1 = __importDefault(require("@infrastructure/models/ProjectModel"));
class SequelizeProjectRepository {
    createProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(project);
            try {
                const newProject = yield ProjectModel_1.default.create({
                    name: project.name,
                    priority: project.priority,
                    dueDate: project.dueDate,
                    team_id: project.team_id
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
        });
    }
    getProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield ProjectModel_1.default.findAll();
                if (projects) {
                    return projects;
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.SequelizeProjectRepository = SequelizeProjectRepository;
