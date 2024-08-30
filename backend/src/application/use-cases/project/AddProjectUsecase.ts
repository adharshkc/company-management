import { ProjectRepository } from "@application/interface/ProjectRepository";
import { Project } from "@domain/entities/Project";




export class AddProjectUsecase{
    constructor(private projectRepository: ProjectRepository){}

    async execute(projectDetails:Project){
        try {
            const newProject = await this.projectRepository.createProject(
              projectDetails
            );
            console.log(newProject)
            if (newProject) {
              return {
                status: 200,
                data: {
                  success: true,
                  newProject,
                },
              } as const;
            } else {
              return {
                status: 500,
                data: {
                  success: false,
                  message: "Error creating project",
                },
              } as const;
            }
          } catch (error:any) {
           
           console.log(error)
           throw new Error(error.message)
          }
    }
}