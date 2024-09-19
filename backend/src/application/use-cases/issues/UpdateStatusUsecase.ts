import { IssueRepository } from "@application/interface/IssueRepository";



export class UpdateStatusUsecase{
    constructor(private issueRepository:IssueRepository){}
    async execute(issueStatus:string, issue_id:string|number){
        try {
            const issues = await this.issueRepository.updateStatus(issueStatus,issue_id)
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