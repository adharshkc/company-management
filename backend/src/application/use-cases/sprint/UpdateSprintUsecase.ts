import { SprintRepository } from "@application/interface/SprintRepository";



export class UpdateSprintUsecase {
    constructor(private sprintRepository:SprintRepository){}
    async execute(name:string, startDate:Date, endDate:Date, sprintId:number|string){
        const sprint = await this.sprintRepository.updateSprint(name, startDate, endDate, sprintId)
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

    }
}