import { Project } from "@domain/entities/Project";

export interface ProjectRepository{
    createProject(project:Project):Promise<Project|null>
    getProjects():Promise<Project[]|null>
    getSingleProject(employee_id:number):Promise<Project|null|any>
}