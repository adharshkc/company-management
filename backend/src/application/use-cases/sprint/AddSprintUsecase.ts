import { SprintRepository } from "@application/interface/SprintRepository";
import { Sprint } from "@domain/entities/Sprint";



export class AddSprintUsecase{
    constructor(private sprintRepository:SprintRepository){
    }
    async execute(sprintDetails:Sprint){
        try {
            const newSprint = await this.sprintRepository.createSprint(sprintDetails)
            if(!newSprint){
                return{ status:500,
                data:{
                    success:false,
                    message:"Error creating sprint"
                }}
            }
            return {
                status:200,
                data:{
                    success:true,
                    newSprint
                }
            }
        } catch (error:any) {
            throw new Error(error)
        }
    }
}