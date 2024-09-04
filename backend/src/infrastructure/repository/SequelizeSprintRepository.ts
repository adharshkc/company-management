import { SprintRepository } from "@application/interface/SprintRepository";
import { Sprint } from "@domain/entities/Sprint";
import EmployeeModel from "@infrastructure/models/EmployeeModel";
import ProjectModel from "@infrastructure/models/ProjectModel";
import SprintModel from "@infrastructure/models/SprintModel";
import TeamModel from "@infrastructure/models/TeamModel";

export class SequelizeSprintRepository implements SprintRepository {
  async createSprint(sprint: Sprint): Promise<Sprint | null | undefined> {
    try {
      // const project = await
      const newSprint = await SprintModel.create({
        name: sprint.name,
        startDate: sprint?.startDate,
        endDate: sprint?.endDate,
        status: sprint?.status,
        project_id: sprint.project_id,
      });
      if (newSprint) {
        return newSprint;
      }
      return null;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getSprints(): Promise<Sprint[] | null> {
    try {
      const sprints = await SprintModel.findAll();
      // if(sprints){
      //     return null
      // }
      return sprints;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getProjectId(employee_id: number | string): Promise<any> {
    try {
      const employee = await EmployeeModel.findOne({
        where: { employee_id: employee_id, role: "Team Lead" },
        include: [
          {
            model: TeamModel,
            include: [
              {
                model: ProjectModel,
                where: { status: "pending" },
                attributes: ["project_id"],
              },
            ],
          },
        ],
      });
      if (employee && employee.team && employee.team.projects.length > 0) {
      return employee?.team.projects[0].project_id;
      }
      else{
        return null
      }
    } catch (error) {
      console.log(error);
      throw new Error("You are not authorized");
    }
  }
}
