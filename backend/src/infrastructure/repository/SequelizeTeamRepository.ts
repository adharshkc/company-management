import { TeamRepository } from "@application/interface/TeamRepository";
import { ITeam } from "@domain/entities/Team";
import TeamModel from "@infrastructure/models/TeamModel";



export class SequelizeTeamRepository implements TeamRepository{
    async addTeam(name: string): Promise<ITeam | null> {
        try {
            const newTeam = await TeamModel.create({name:name})
            return newTeam
        } catch (error:any) {
            console.log(error)
            throw new Error(error)
        }
    }
    async getTeams(): Promise<ITeam[] | null> {
        try {
            const teams = await TeamModel.findAll()
            return teams
        } catch (error:any) {
            throw new Error(error);
        }
    }
}