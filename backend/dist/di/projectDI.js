"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectController = void 0;
const AddProjectUsecase_1 = require("@application/use-cases/project/AddProjectUsecase");
const GetProjectsUsecase_1 = require("@application/use-cases/project/GetProjectsUsecase");
const ProjectController_1 = require("@frameworks/controllers/ProjectController");
const SequelizeProjectRepository_1 = require("@infrastructure/repository/SequelizeProjectRepository");
const projectRepository = new SequelizeProjectRepository_1.SequelizeProjectRepository();
const addProjectUsecase = new AddProjectUsecase_1.AddProjectUsecase(projectRepository);
const getProjects = new GetProjectsUsecase_1.GetProjectsUsecase(projectRepository);
const projectController = new ProjectController_1.ProjectController(addProjectUsecase, getProjects);
exports.projectController = projectController;