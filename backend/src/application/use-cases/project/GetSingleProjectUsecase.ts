import { ProjectRepository } from "@application/interface/ProjectRepository";



export class GetSingleProjectUsecase{
    constructor(private projectRepository:ProjectRepository){}
    async execute(employee_id:number){
        try {
            const response = await this.projectRepository.getSingleProject(employee_id)
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