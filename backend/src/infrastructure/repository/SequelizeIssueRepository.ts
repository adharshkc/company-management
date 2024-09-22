import { IssueRepository } from "@application/interface/IssueRepository";
import EmployeeModel from "@infrastructure/models/EmployeeModel";
import IssueModel from "@infrastructure/models/IssueModel";
import SprintModel from "@infrastructure/models/SprintModel";

export class SequelizeIssueRepository implements IssueRepository {
  async createIssue(name: string, sprintId: number | string): Promise<any> {
    try {
      const issue = await IssueModel.create({
        name: name,
        sprint_id: sprintId,
      });
      return issue;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getIssues(sprintId: number | string): Promise<any> {
    try {
      const issues = await IssueModel.findAll({
        where: { sprint_id: sprintId },
        order: [['createdAt', 'ASC']],
        include:[
          {
            model:EmployeeModel,
            as: "assignee",
            attributes:["name"]
          },
          {
            model:SprintModel,
            as: "sprint",
            attributes:["name"]
          }
        ]
      });
      return issues;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async updateName(issueName: string, issue_id: number | string): Promise<any> {
    try {
      const issue = await IssueModel.update(
        {
          name: issueName,
        },
        { where: { issue_id: issue_id }, returning: true }
      );
      return  issue
    } catch (error:any) {
        throw new Error(error)
    }
  }
  async updateStatus(issueStatus: string, issue_id: number | string): Promise<any> {
    try {
      const issue = await IssueModel.update(
        {
          status: issueStatus,
        },
        { where: { issue_id: issue_id }, returning: true }
      );
      return issue
    } catch (error:any) {
        throw new Error(error)
    }
  }
  async updateDescription(description: string, issue_id: number | string): Promise<any> {
    try {
      const issue = await IssueModel.update(
        {
          description: description,
        },
        { where: { issue_id: issue_id },}
      );
      return issue
    } catch (error:any) {
        throw new Error(error)
    }
      
  }
}
