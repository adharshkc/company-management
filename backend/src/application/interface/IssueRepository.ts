export interface IssueRepository{
    createIssue(name:string, sprintId:number|string):Promise<any>
    getIssues(sprintId:number|string):Promise<any>
    updateName(issueName:string, issue_id:number|string):Promise<any>
    updateStatus(issueStatus:string, issue_id:number|string):Promise<any>
    updateDescription(description:string, issue_id:number|string):Promise<any>
}