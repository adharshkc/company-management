import {
  UpdateNameUsecase,
  UpdateStatusUsecase,
} from "@application/use-cases/issues";
import { CreateIssueUsecase } from "@application/use-cases/issues/CreateIssueUsecase";
import { GetIssueUsecase } from "@application/use-cases/issues/GetIssueUsecase";
import { UpdateDescriptionUsecase } from "@application/use-cases/issues/UpdateDescriptionUsecase";
import { NextFunction, Request, Response } from "express";

export class IssueController {
  constructor(
    private createIssueUsecase: CreateIssueUsecase,
    private getIssueUsecase: GetIssueUsecase,
    private updateNameUsecase: UpdateNameUsecase,
    private updateStatusUsecase: UpdateStatusUsecase,
    private updateDescriptionUsecase:UpdateDescriptionUsecase
  ) {}
  async createIssue(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, sprintId } = req.body;
      console.log(req.body);
      if (!name) throw new Error("name is required");
      console.log(name);
      const { status, data } = await this.createIssueUsecase.execute(
        name,
        sprintId
      );
      return res.status(status).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getIssues(req: Request, res: Response, next: NextFunction) {
    try {
      const sprintId = req.params.sprintId;
      console.log(sprintId);
      const { status, data } = await this.getIssueUsecase.execute(sprintId);
      console.log(data.issues.length);
      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }

  async updateName(req: Request, res: Response, next: NextFunction) {
    try {
      const issueName = req.body.issueName;
      const issue_id = req.params.issueId;
      const { status, data } = await this.updateNameUsecase.execute(
        issueName,
        issue_id
      );
      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
  async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const issueStatus = req.body.status;
      if (!issueStatus)
        return res.status(400).json({ message: "status is required" });
      const issue_id = req.params.issueId;
      const { status, data } = await this.updateStatusUsecase.execute(
        issueStatus,
        issue_id
      );
      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
  
  async updateDescription (req:Request, res:Response, next:NextFunction) {
    try {
      const issueDescription = req.body.description
      console.log(issueDescription)
      const issue_id = req.params.issueId;
      const { status, data } = await this.updateDescriptionUsecase.execute(
        issueDescription,
        issue_id
      );
      return res.status(status).json(data);
      
    } catch (error) {
      
    }
  }
}
