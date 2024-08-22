import { ITeam } from "@domain/entities/Team";


export interface TeamRepository{
    addTeam(name:string):Promise<ITeam|null>
    getTeams():Promise<ITeam[]|null>
}