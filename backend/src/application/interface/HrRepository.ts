import { IEmployee } from "@domain/entities/Employee"
import { Hr } from "@domain/entities/Hr"
import { ITeam } from "@domain/entities/Team"

export interface HrRepository{
    checkHr(email:string):Promise<Hr|null>
    hrLogin(email: string):Promise<any>
    getHr(hr_id:number):Promise<Hr|null>
    addEmployee(data:IEmployee):Promise<IEmployee|null>
    checkEmployee(email:string):Promise<string|null|undefined>
    getEmployees():Promise<IEmployee[]|null>
}