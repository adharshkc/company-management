"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projectDI_1 = require("@di/projectDI");
const sprintDI_1 = require("@di/sprintDI");
const issueDi_1 = require("@di/issueDi");
const employeeMiddleware_1 = require("@frameworks/middlewares/authentication/employeeMiddleware");
const jwtVerify_1 = require("@frameworks/middlewares/authentication/jwtVerify");
const express_1 = require("express");
const columnDI_1 = require("@di/columnDI");
const projectRouter = (0, express_1.Router)();
//Projects
projectRouter.get("/", jwtVerify_1.verifyAdminAccess, projectDI_1.projectController.getProjects.bind(projectDI_1.projectController));
projectRouter.post("/", jwtVerify_1.verifyAdminAccess, projectDI_1.projectController.createProject.bind(projectDI_1.projectController));
projectRouter.get("/single", employeeMiddleware_1.verifyEmployeeAccessToken, projectDI_1.projectController.getProjectByTeamId.bind(projectDI_1.projectController));
//Sprint
projectRouter.get("/:projectId/sprints", employeeMiddleware_1.verifyEmployeeAccessToken, sprintDI_1.sprintController.getAllSprint.bind(sprintDI_1.sprintController));
projectRouter.post("/:projectId/sprints/", employeeMiddleware_1.verifyEmployeeAccessToken, sprintDI_1.sprintController.createSprint.bind(sprintDI_1.sprintController));
projectRouter.put("/sprints/", employeeMiddleware_1.verifyEmployeeAccessToken, sprintDI_1.sprintController.sprintUpdate.bind(sprintDI_1.sprintController));
projectRouter.delete("/sprints/:id", employeeMiddleware_1.verifyEmployeeAccessToken, sprintDI_1.sprintController.sprintDelete.bind(sprintDI_1.sprintController));
projectRouter.get("/:projectId/sprints/started", employeeMiddleware_1.verifyEmployeeAccessToken, sprintDI_1.sprintController.getStartedSprints.bind(sprintDI_1.sprintController));
projectRouter.patch("/:projectId/sprints/:sprintId/start", employeeMiddleware_1.verifyEmployeeAccessToken, sprintDI_1.sprintController.sprintStart.bind(sprintDI_1.sprintController));
//issues
projectRouter.post("/sprints/issues/", employeeMiddleware_1.verifyEmployeeAccessToken, issueDi_1.issueController.createIssue.bind(issueDi_1.issueController));
projectRouter.get("/sprints/:sprintId/issues", employeeMiddleware_1.verifyEmployeeAccessToken, issueDi_1.issueController.getIssues.bind(issueDi_1.issueController));
projectRouter.get("/sprints/:sprintId/issues");
projectRouter.patch("/sprints/issues/:issueId/update-name", employeeMiddleware_1.verifyEmployeeAccessToken, issueDi_1.issueController.updateName.bind(issueDi_1.issueController));
projectRouter.patch("/sprints/issues/:issueId/update-status", employeeMiddleware_1.verifyEmployeeAccessToken, issueDi_1.issueController.updateStatus.bind(issueDi_1.issueController));
projectRouter.patch("/sprints/issues/:issueId/update-description", employeeMiddleware_1.verifyEmployeeAccessToken, issueDi_1.issueController.updateDescription.bind(issueDi_1.issueController));
//column
projectRouter.post("/sprints/columns", employeeMiddleware_1.verifyEmployeeAccessToken, columnDI_1.columnController.newColumn.bind(columnDI_1.columnController));
projectRouter.get("/:projectId/sprints/columns", employeeMiddleware_1.verifyEmployeeAccessToken, columnDI_1.columnController.getColumns.bind(columnDI_1.columnController));
projectRouter.patch("/sprints/columns/order", employeeMiddleware_1.verifyEmployeeAccessToken, columnDI_1.columnController.updateColumn.bind(columnDI_1.columnController));
projectRouter.delete("/sprints/columns/:columnId", employeeMiddleware_1.verifyEmployeeAccessToken, columnDI_1.columnController.deleteColumn.bind(columnDI_1.columnController));
exports.default = projectRouter;
