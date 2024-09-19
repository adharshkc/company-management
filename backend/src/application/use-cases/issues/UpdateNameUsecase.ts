import { IssueRepository } from "@application/interface/IssueRepository";



export class UpdateNameUsecase{
    constructor(private issueRepository:IssueRepository){}
    async execute(issueName:string, issue_id:string|number){
        try {
            const issues = await this.issueRepository.updateName(issueName,issue_id)
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