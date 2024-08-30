import { hrController } from "@di/hrDI";
import { verifyHrAccessToken } from "@frameworks/middlewares/authentication/hrMiddleware";
import { Router } from "express";



const hrRouter = Router()

hrRouter.post('/login', hrController.hrLogin.bind(hrController))
hrRouter.post('/verify-otp', hrController.verifyOtp.bind(hrController))
hrRouter.post('/add-employee',verifyHrAccessToken, hrController.addEmployee.bind(hrController))
hrRouter.post('/add-team',verifyHrAccessToken, hrController.createTeam.bind(hrController))
hrRouter.get('/',verifyHrAccessToken, hrController.getHr.bind(hrController))
hrRouter.get('/employees',verifyHrAccessToken, hrController.getEmployees.bind(hrController))
hrRouter.get('/teams',verifyHrAccessToken, hrController.getTeams.bind(hrController))

export default hrRouter