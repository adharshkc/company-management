import { IssueRepository } from "@application/interface/IssueRepository";


export class GetIssueUsecase {
    constructor(private issueRepository:IssueRepository){}
    async execute(sprintId:number|string){
        try {
            const issues = await this.issueRepository.getIssues(sprintId)
            return {
                status:200,
                data:{
                    success:true,
                    issues
                }
            }
        } catch (error:any) {
            throw new Error(error)
        }
    }
}