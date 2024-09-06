import { AddSprintUsecase } from "@application/use-cases/sprint/AddSprintUsecase";
import { GetSprintUsecase } from "@application/use-cases/sprint/GetSprintUsecase";
import { UpdateSprintUsecase } from "@application/use-cases/sprint/UpdateSprintUsecase";
import { NextFunction, Request, Response } from "express";

export class SprintController {
  constructor(
    private addSprint: AddSprintUsecase,
    private getSprint: GetSprintUsecase,
    private updateSprint: UpdateSprintUsecase
  ) {}

  async createSprint(req: Request, res: Response, next: NextFunction) {
    try {
      const sprint = {
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        status: req.body.status,
        project_id: req.body.project_id,
      };
      const { userId } = req?.employee;
      const { status, data } = await this.addSprint.execute(sprint, userId);
      res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }

  async getAllSprint(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("hasdfh");
      const { status, data } = await this.getSprint.execute();
      console.log("data", data)
      res.status(status).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async sprintUpdate(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, startDate, endDate } = req?.body;
      console.log(name, startDate, endDate)
      const sprintId = req?.params?.id;
      console.log(sprintId)
      const { status, data } = await this.updateSprint.execute(
        name,
        startDate,
        endDate,
        sprintId
      );
      res.status(status).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
