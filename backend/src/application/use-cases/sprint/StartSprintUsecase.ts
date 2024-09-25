import { SprintRepository } from "@application/interface/SprintRepository";


export class StartSprintUsecase{
    constructor(private sprintRepository:SprintRepository){}
    async execute (status:string, sprintId:number, project_id:number){
        try {
            const sprint = await this.sprintRepository.startSprint(status, sprintId, project_id)
            if(!sprint){
                return {
                    status:500,
                    data:{
                        success:false,
                        message:"Something went wrong..."
                    }
                }
            }
            return {
                status:200,
                data:{
                    success:true,
                    sprint
                }
            }
          } catch (error:any) {
           throw new Error(error)
          }
    }
}