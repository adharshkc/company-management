import { AddProjectUsecase } from "@application/use-cases/project/AddProjectUsecase";
import { GetProjectsUsecase } from "@application/use-cases/project/GetProjectsUsecase";
import { ProjectController } from "@frameworks/controllers/ProjectController";
import { SequelizeProjectRepository } from "@infrastructure/repository/SequelizeProjectRepository";







const projectRepository = new SequelizeProjectRepository()
const addProjectUsecase = new AddProjectUsecase(projectRepository)
const getProjects = new GetProjectsUsecase(projectRepository)
const projectController = new ProjectController(addProjectUsecase, getProjects)


export {projectController}