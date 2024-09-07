
import { projectController } from "@di/projectDI";
import { sprintController } from "@di/sprintDI";
import { verifyEmployeeAccessToken } from "@frameworks/middlewares/authentication/employeeMiddleware";
import { verifyAdminAccess } from "@frameworks/middlewares/authentication/jwtVerify";
import { Router } from "express";





const projectRouter = Router()

projectRouter.get('/', verifyAdminAccess, projectController.getProjects.bind(projectController))
projectRouter.post('/', verifyAdminAccess, projectController.createProject.bind(projectController))



projectRouter.get('/sprints', verifyEmployeeAccessToken, sprintController.getAllSprint.bind(sprintController))
projectRouter.post('/sprints/', verifyEmployeeAccessToken, sprintController.createSprint.bind(sprintController))
projectRouter.put('/sprints/', verifyEmployeeAccessToken, sprintController.sprintUpdate.bind(sprintController))
projectRouter.delete('/sprints/:id', verifyEmployeeAccessToken, sprintController.sprintDelete.bind(sprintController))

export default projectRouter