import { SprintRepository } from "@application/interface/SprintRepository";



export class GetSprintUsecase {
    constructor(private sprintRepository:SprintRepository){}
    async execute(){
        try {
            const sprints = await this.sprintRepository.getSprints()
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