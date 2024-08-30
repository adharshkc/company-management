import { AddProjectUsecase } from "@application/use-cases/project/AddProjectUsecase";
import { GetProjectsUsecase } from "@application/use-cases/project/GetProjectsUsecase";
import { NextFunction, Request, Response } from "express";

export class ProjectController {
  constructor(
    private addProject: AddProjectUsecase,
    private getProject: GetProjectsUsecase
  ) {}

  async createProject(req: Request, res: Response, next: NextFunction) {
    // const project = req.body;
    const project = {
      name: req.body.name,
      priority: req.body.priority,
      team_id: parseInt(req.body.team_id),
      startDate: req.body.startDate,
    };
    console.log("eke", project);
    try {
      const result = await this.addProject.execute(project);
      res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }
  async getProjects(req: Request, res: Response, next: NextFunction) {
    console.log("hello")
    try {
      const result = await this.getProject.execute();
      console.log(result);
      res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  }
}
