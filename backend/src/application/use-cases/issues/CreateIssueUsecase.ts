import { IssueRepository } from "@application/interface/IssueRepository"



export class CreateIssueUsecase{
    constructor(private issueRepository:IssueRepository){}
    async execute(name:string, sprintId:number|string){
        try {
            console.log(name)
            const issue = await this.issueRepository.createIssue(name, sprintId)
            if(!issue){
                return {
                    status:500,
                    data:{
                        success:false,
                        message:"Error creating Issues"
                    }
                }
            }
            return {
                status:200,
                data:{
                    success:true,
                    issue
                }
            }
        } catch (error:any) {
            console.log(error)
            throw new Error(error)
        }
    }
}