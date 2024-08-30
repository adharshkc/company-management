import { TeamRepository } from "@application/interface/TeamRepository";



export class CreateTeamUsecase{
    constructor(private teamRepository:TeamRepository){}
    async execute(name: string){
        try {
            const team = await this.teamRepository.addTeam(name);
            return {
              status: 200,
              data: {
                success: true,
                team,
              },
            };
          } catch (error) {
            throw new Error((error as Error).message);
          }
    }
}