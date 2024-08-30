import { TeamRepository } from "@application/interface/TeamRepository";

export class GetAllTeamsUsecase {
  constructor(private teamRepository: TeamRepository) {}
  async execute() {
    try {
      const teams = await this.teamRepository.getTeams();
      return {
        status: 200,
        data: {
          success: true,
          teams,
        },
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
