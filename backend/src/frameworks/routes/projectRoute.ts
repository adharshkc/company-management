
import { projectController } from "@di/projectDI";
import { verifyAdminAccess } from "@frameworks/middlewares/authentication/jwtVerify";
import { Router } from "express";





const projectRouter = Router()

projectRouter.get('/', verifyAdminAccess, projectController.getProjects.bind(projectController))
projectRouter.post('/create', verifyAdminAccess, projectController.createProject.bind(projectController))

export default projectRouter