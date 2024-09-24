import { SprintRepository } from "@application/interface/SprintRepository";


export class ChangeStatusUsecase{
    constructor(private sprintRepository:SprintRepository){}
    async execute (status:string, sprintId:number){
        try {
            const sprint = await this.sprintRepository.changeSprintStatus(status, sprintId)
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