export interface IssueRepository{
    createIssue(name:string, sprintId:number|string):Promise<any>
}