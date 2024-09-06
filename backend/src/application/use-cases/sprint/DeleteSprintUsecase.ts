import { SprintRepository } from "@application/interface/SprintRepository";

export class DeleteSprintUsecase {
  constructor(private sprintRepository: SprintRepository) {}
  async execute(sprintId: number|string) {
    try {
      const sprint = await this.sprintRepository.deleteSprint(sprintId);
      if (!sprint) {
        return {
          status: 500,
          data: {
            success: false,
            message: "Something went wrong...",
          },
        };
      }
      return {
        status: 200,
        data: {
          success: true,
          sprint,
        },
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
