import { CreateIssueUsecase } from "@application/use-cases/issues/CreateIssueUsecase";
import { SequelizeIssueRepository } from "@infrastructure/repository/SequelizeIssueRepository";
import {IssueController } from "@frameworks/controllers/IssueController"





const issueRepository = new SequelizeIssueRepository()
const createIssueUsecase = new CreateIssueUsecase(issueRepository)
const issueController = new IssueController(createIssueUsecase)

export {issueController}