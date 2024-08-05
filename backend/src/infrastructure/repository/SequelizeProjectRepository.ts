import { ProjectRepository } from "@application/interface/ProjectRepository";
import { Project } from "@domain/entities/Project";
import ProjectModel from "@infrastructure/models/ProjectModel";


export class SequelizeProjectRepository implements ProjectRepository{
    async createProject(project: Project): Promise<Project | null> {
        console.log(project)
        try {

            const newProject = await ProjectModel.create({
                name: project.name,
                priority:project.priority,
                dueDate: project.dueDate,
                team_id: project.team_id
            })
            if(newProject){
               return newProject
            }
            return null
        } catch (error:any) {
            console.log(error)
            throw new Error(error)
        }
    }
}