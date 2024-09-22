"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issueController = void 0;
const SequelizeIssueRepository_1 = require("@infrastructure/repository/SequelizeIssueRepository");
const IssueController_1 = require("@frameworks/controllers/IssueController");
const issues_1 = require("@application/use-cases/issues");
const UpdateDescriptionUsecase_1 = require("@application/use-cases/issues/UpdateDescriptionUsecase");
const issueRepository = new SequelizeIssueRepository_1.SequelizeIssueRepository();
const createIssueUsecase = new issues_1.CreateIssueUsecase(issueRepository);
const getIssuesUsecase = new issues_1.GetIssueUsecase(issueRepository);
const updateNameUsecase = new issues_1.UpdateNameUsecase(issueRepository);
const updateStatusUsecase = new issues_1.UpdateStatusUsecase(issueRepository);
const updatedescriptionUsecase = new UpdateDescriptionUsecase_1.UpdateDescriptionUsecase(issueRepository);
const issueController = new IssueController_1.IssueController(createIssueUsecase, getIssuesUsecase, updateNameUsecase, updateStatusUsecase, updatedescriptionUsecase);
exports.issueController = issueController;
