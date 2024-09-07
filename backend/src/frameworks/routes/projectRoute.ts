
import { projectController } from "@di/projectDI";
import { sprintController } from "@di/sprintDI";
import { issueController } from "@di/issueDi";
import { verifyEmployeeAccessToken } from "@frameworks/middlewares/authentication/employeeMiddleware";
import { verifyAdminAccess } from "@frameworks/middlewares/authentication/jwtVerify";
import { Router } from "express";





const projectRouter = Router()
//Projects
projectRouter.get('/', verifyAdminAccess, projectController.getProjects.bind(projectController))
projectRouter.post('/', verifyAdminAccess, projectController.createProject.bind(projectController))


//Sprint
projectRouter.get('/sprints', verifyEmployeeAccessToken, sprintController.getAllSprint.bind(sprintController))
projectRouter.post('/sprints/', verifyEmployeeAccessToken, sprintController.createSprint.bind(sprintController))
projectRouter.put('/sprints/', verifyEmployeeAccessToken, sprintController.sprintUpdate.bind(sprintController))
projectRouter.delete('/sprints/:id', verifyEmployeeAccessToken, sprintController.sprintDelete.bind(sprintController))

//issues
projectRouter.post('/sprints/issues/', verifyEmployeeAccessToken, issueController.createIssue.bind(issueController))

export default projectRouter