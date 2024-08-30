"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projectDI_1 = require("@di/projectDI");
const jwtVerify_1 = require("@frameworks/middlewares/authentication/jwtVerify");
const express_1 = require("express");
const projectRouter = (0, express_1.Router)();
projectRouter.get('/', jwtVerify_1.verifyAdminAccess, projectDI_1.projectController.getProjects.bind(projectDI_1.projectController));
projectRouter.post('/create', jwtVerify_1.verifyAdminAccess, projectDI_1.projectController.createProject.bind(projectDI_1.projectController));
exports.default = projectRouter;
