import {
  AddProjectUsecase,
  GetProjectsUsecase,
  GetSingleProjectUsecase,
} from "@application/use-cases/project";
import { ProjectController } from "@frameworks/controllers/ProjectController";
import { SequelizeProjectRepository } from "@infrastructure/repository/SequelizeProjectRepository";

const projectRepository = new SequelizeProjectRepository();
const addProjectUsecase = new AddProjectUsecase(projectRepository);
const getProjects = new GetProjectsUsecase(projectRepository);
const getSingleProject = new GetSingleProjectUsecase(projectRepository);
const projectController = new ProjectController(
  addProjectUsecase,
  getProjects,
  getSingleProject
);

export { projectController };
