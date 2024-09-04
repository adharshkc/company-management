import { SprintRepository } from "@application/interface/SprintRepository";
import { Sprint } from "@domain/entities/Sprint";
import SprintModel from "@infrastructure/models/SprintModel";




export class SequelizeSprintRepository implements SprintRepository{
    async createSprint(sprint: Sprint): Promise<Sprint | null|undefined> {
        try{
            // const project = await
            const newSprint = await SprintModel.create({
                name:sprint.name,
                startDate:sprint?.startDate,
                endDate:sprint?.endDate,
                status:sprint?.status,
                project_id:sprint.project_id
            })
            if(newSprint){
                return newSprint
            }
            return null
        }catch(error:any){
            throw new Error(error)
        }
    }

    async getSprints(): Promise<Sprint[] | null> {
        try {
            const sprints =await SprintModel.findAll()
            // if(sprints){
            //     return null
            // }
            return sprints

        } catch (error:any) {
            throw new Error(error)
        }
    }
}