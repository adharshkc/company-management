import { SprintRepository } from "@application/interface/SprintRepository";



export class GetSprintUsecase {
    constructor(private sprintRepository:SprintRepository){}
    async execute(project_id:number){
        try {
            const sprints = await this.sprintRepository.getSprints(project_id)
            return {
                status:200,
                data:{
                    success:true,
                    sprints
                }
            }
        } catch (error:any) {
            throw new Error(error)
        }
    }
}