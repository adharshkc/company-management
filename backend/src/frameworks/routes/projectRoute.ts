
import { projectController } from "@di/projectDI";
import { sprintController } from "@di/sprintDI";
import { verifyEmployeeAccessToken } from "@frameworks/middlewares/authentication/employeeMiddleware";
import { verifyAdminAccess } from "@frameworks/middlewares/authentication/jwtVerify";
import { Router } from "express";





const projectRouter = Router()

projectRouter.get('/', verifyAdminAccess, projectController.getProjects.bind(projectController))
projectRouter.post('/create', verifyAdminAccess, projectController.createProject.bind(projectController))
projectRouter.get('/sprints', verifyEmployeeAccessToken, sprintController.getAllSprint.bind(sprintController))
projectRouter.post('/sprints/add', verifyEmployeeAccessToken, sprintController.createSprint.bind(sprintController))

export default projectRouter