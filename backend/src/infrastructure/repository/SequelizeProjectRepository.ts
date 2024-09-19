import { ProjectRepository } from "@application/interface/ProjectRepository";
import { Project } from "@domain/entities/Project";
import EmployeeModel from "@infrastructure/models/EmployeeModel";
import ProjectModel from "@infrastructure/models/ProjectModel";
import TeamModel from "@infrastructure/models/TeamModel";

export class SequelizeProjectRepository implements ProjectRepository {
  async createProject(project: Project): Promise<Project | null> {
    console.log(project.startDate);
    try {
      const newProject = await ProjectModel.create({
        name: project.name,
        priority: project.priority,
        startDate: project.startDate,
        team_id: project.team_id,
      });
      if (newProject) {
        return newProject;
      }
      return null;
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }

  async getProjects(): Promise<Project[] | null> {
    try {
      const projects = await ProjectModel.findAll({
        include: [
          {
            model: TeamModel,
            attributes: ["team_id", "name"],
          },
        ],
      });
      console.log(projects);
      if (projects) {
        return projects;
      } else {
        return null;
      }
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }

  async getSingleProject(employee_id: number): Promise<Project | null|any> {
    console.log(employee_id)
      try {
        const employee = await EmployeeModel.findOne({where:{employee_id:employee_id}})
        console.log(employee)
        const project = await ProjectModel.findOne({where:{team_id:employee?.team_id}})
        console.log(project)
        return project;
      } catch (error:any) {
        console.log(error)
        throw new Error(error)
      }
  }
}
