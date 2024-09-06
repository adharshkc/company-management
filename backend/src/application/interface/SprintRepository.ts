import { Sprint } from "@domain/entities/Sprint";

export interface SprintRepository{
    createSprint(sprint:Sprint):Promise<Sprint|null|undefined>
    getSprints():Promise<Sprint[]|null>
    getProjectId(employee_id:number|string):Promise<any>
    updateSprint(name:string, startDate:Date, endDate:Date, sprintId:number|string):Promise<Sprint|null|undefined>
    deleteSprint(sprintId:number|string):Promise<string|null|undefined>
}