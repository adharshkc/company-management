import { CreateIssueUsecase } from "@application/use-cases/issues/CreateIssueUsecase";
import { SequelizeIssueRepository } from "@infrastructure/repository/SequelizeIssueRepository";
import {IssueController } from "@frameworks/controllers/IssueController"
import { GetIssueUsecase } from "@application/use-cases/issues/GetIssueUsecase";





const issueRepository = new SequelizeIssueRepository()
const createIssueUsecase = new CreateIssueUsecase(issueRepository)
const getIssuesUsecase = new GetIssueUsecase(issueRepository)
const issueController = new IssueController(createIssueUsecase, getIssuesUsecase)

export {issueController}