import { Project } from "@domain/entities/Project";

export interface ProjectRepository{
    createProject(project:Project):Promise<Project|null>
}