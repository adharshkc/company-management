import { ProjectRepository } from "@application/interface/ProjectRepository";




export class GetProjectsUsecase{
    constructor(private projectRepository:ProjectRepository){}
    async execute(){
        try {
            const response = await this.projectRepository.getProjects()
            if(response){
              return {
                status: 200,
                data: {
                  success: true,
                  projects: response
                }
              }
            }else{
              return {status:   404, data: {success: false}
              }
            }
          } catch (error:any) {
            throw new Error(error.message)
          }
    }
}