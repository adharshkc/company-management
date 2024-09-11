import { IssueRepository } from "@application/interface/IssueRepository";
import IssueModel from "@infrastructure/models/IssueModel";



export class SequelizeIssueRepository implements IssueRepository{
    async createIssue(name: string, sprintId:number|string): Promise<any> {
        try {
            const issue = await IssueModel.create({
                name:name,
                sprint_id:sprintId
            })
            return issue
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async getIssues(sprintId: number | string): Promise<any> {
        try {
            const issues = await IssueModel.findAll({where :{sprint_id:sprintId}})
            return issues
        } catch (error:any) {
            throw new Error(error)
        }
    }
}