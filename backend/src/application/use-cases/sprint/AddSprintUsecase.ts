import { SprintRepository } from "@application/interface/SprintRepository";
import { Sprint } from "@domain/entities/Sprint";

export class AddSprintUsecase {
  constructor(private sprintRepository: SprintRepository) {}
  async execute(sprintDetails: Sprint, empId: string | number) {
    try {
      const projectId = await this.sprintRepository.getProjectId(empId);
      if (!projectId) {
        return {
          status: 401,
          data: { success: false, message: "You are not authorized..." },
        };
      }
      
      sprintDetails.project_id = projectId;
      const newSprint = await this.sprintRepository.createSprint(sprintDetails);
      if (!newSprint) {
        return {
          status: 500,
          data: {
            success: false,
            message: "Error creating sprint",
          },
        };
      }
      return {
        status: 200,
        data: {
          success: true,
          newSprint,
        },
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
