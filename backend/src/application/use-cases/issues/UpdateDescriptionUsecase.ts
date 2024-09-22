import { IssueRepository } from "@application/interface/IssueRepository";



export class UpdateDescriptionUsecase{
    constructor(private issueRepository:IssueRepository){}
    async execute(issueDescription:string, issue_id:string|number){
        try {
            const issues = await this.issueRepository.updateDescription(issueDescription,issue_id)
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