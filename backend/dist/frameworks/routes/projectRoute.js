"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projectDI_1 = require("@di/projectDI");
const sprintDI_1 = require("@di/sprintDI");
const issueDi_1 = require("@di/issueDi");
const employeeMiddleware_1 = require("@frameworks/middlewares/authentication/employeeMiddleware");
const jwtVerify_1 = require("@frameworks/middlewares/authentication/jwtVerify");
const express_1 = require("express");
const projectRouter = (0, express_1.Router)();
//Projects
projectRouter.get("/", jwtVerify_1.verifyAdminAccess, projectDI_1.projectController.getProjects.bind(projectDI_1.projectController));
projectRouter.post("/", jwtVerify_1.verifyAdminAccess, projectDI_1.projectController.createProject.bind(projectDI_1.projectController));
//Sprint
projectRouter.get("/sprints", employeeMiddleware_1.verifyEmployeeAccessToken, sprintDI_1.sprintController.getAllSprint.bind(sprintDI_1.sprintController));
projectRouter.post("/sprints/", employeeMiddleware_1.verifyEmployeeAccessToken, sprintDI_1.sprintController.createSprint.bind(sprintDI_1.sprintController));
projectRouter.put("/sprints/", employeeMiddleware_1.verifyEmployeeAccessToken, sprintDI_1.sprintController.sprintUpdate.bind(sprintDI_1.sprintController));
projectRouter.delete("/sprints/:id", employeeMiddleware_1.verifyEmployeeAccessToken, sprintDI_1.sprintController.sprintDelete.bind(sprintDI_1.sprintController));
//issues
projectRouter.post("/sprints/issues/", employeeMiddleware_1.verifyEmployeeAccessToken, issueDi_1.issueController.createIssue.bind(issueDi_1.issueController));
projectRouter.get("/sprints/:sprintId/issues", employeeMiddleware_1.verifyEmployeeAccessToken, issueDi_1.issueController.getIssues.bind(issueDi_1.issueController));
exports.default = projectRouter;
