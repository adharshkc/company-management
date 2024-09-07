import { CreateIssueUsecase } from "@application/use-cases/issues/CreateIssueUsecase";
import { NextFunction, Request, Response } from "express";

export class IssueController {
  constructor(private createIssueUsecase: CreateIssueUsecase) {}
  async createIssue(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, sprintId } = req.body;
      console.log(req.body)
      if(!name)throw new Error("name is required")
      console.log(name);
      const { status, data } = await this.createIssueUsecase.execute(name, sprintId);
      return res.status(status).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
