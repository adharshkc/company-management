import { Sprint } from "@domain/entities/Sprint";

export interface SprintRepository{
    createSprint(sprint:Sprint):Promise<Sprint|null|undefined>
    getSprints():Promise<Sprint[]|null>
}