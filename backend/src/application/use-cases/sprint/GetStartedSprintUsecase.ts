import { SprintRepository } from "@application/interface/SprintRepository";


export class GetStartedSprintUsecase{
    constructor(private sprintRepository:SprintRepository){}
    async execute(project_id:number){
        try {
            const sprints = await this.sprintRepository.getStartedSprints(project_id)
            console.log(sprints)
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