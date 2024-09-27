import { SprintRepository } from "@application/interface/SprintRepository";
import { Sprint } from "@domain/entities/Sprint";
import ColumnModel from "@infrastructure/models/ColumnModel";
import EmployeeModel from "@infrastructure/models/EmployeeModel";
import IssueModel from "@infrastructure/models/IssueModel";
import ProjectModel from "@infrastructure/models/ProjectModel";
import SprintModel from "@infrastructure/models/SprintModel";
import TeamModel from "@infrastructure/models/TeamModel";

export class SequelizeSprintRepository implements SprintRepository {
  async createSprint(sprint: Sprint): Promise<Sprint | null | undefined> {
    try {
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

  async getSprints(project_id: number): Promise<Sprint[] | null> {
    try {
      const sprints = await SprintModel.findAll({
        where: { project_id: project_id },
        include: [{ model: IssueModel },{model:ColumnModel}],
        order: [["createdAt", "ASC"]],
      });
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
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      throw new Error("You are not authorized");
    }
  }
  async updateSprint(
    name: string,
    startDate: Date,
    endDate: Date,
    sprintId: number | string
  ): Promise<Sprint | null | undefined> {
    try {
      const [numberOfAffectedRows, [updatedSprint]] = await SprintModel.update(
        {
          name: name,
          startDate: startDate,
          endDate: endDate,
        },
        {
          where: {
            sprint_id: sprintId,
          },
          returning: true,
        }
      );
      if (numberOfAffectedRows === 0) {
        return null;
      }

      return updatedSprint;
    } catch (error) {
      throw new Error("Error updating Sprint");
    }
  }

  async deleteSprint(
    sprintId: number | string
  ): Promise<string | null | undefined> {
    try {
      const sprint = await SprintModel.destroy({
        where: { sprint_id: sprintId },
      });
      if (sprint) {
        return "success";
      }
      return null;
    } catch (error) {
      console.log(error);
      throw new Error("Error deleting Sprint");
    }
  }

  async getStartedSprints(project_id: number): Promise<any> {
    try {
      const sprints = await SprintModel.findOne({
        where: { project_id: project_id, status: "pending" },
      });

      return sprints;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async startSprint(status: string, sprintId: number,project_id:number): Promise<any> {
    try {
      const sprints = await SprintModel.findAll({
        where: { project_id: project_id,  },
      });
      const sprint = await SprintModel.update(
        {
          status: status,
        },
        {
          where: { sprint_id: sprintId },
        }
      );

      return sprint;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
