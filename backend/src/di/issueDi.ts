
import { SequelizeIssueRepository } from "@infrastructure/repository/SequelizeIssueRepository";
import {IssueController } from "@frameworks/controllers/IssueController"
import { CreateIssueUsecase, GetIssueUsecase,UpdateNameUsecase,UpdateStatusUsecase } from "@application/use-cases/issues"





const issueRepository = new SequelizeIssueRepository()
const createIssueUsecase = new CreateIssueUsecase(issueRepository)
const getIssuesUsecase = new GetIssueUsecase(issueRepository)
const updateNameUsecase = new UpdateNameUsecase(issueRepository)
const updateStatusUsecase = new UpdateStatusUsecase(issueRepository)
const issueController = new IssueController(createIssueUsecase, getIssuesUsecase, updateNameUsecase,updateStatusUsecase)

export {issueController}