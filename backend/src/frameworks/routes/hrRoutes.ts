import { HrUsecase } from "@application/use-cases/HrUsecase";
import { HrController } from "@frameworks/controllers/HrController";
import NodeMailer from "@infrastructure/services/nodeMailer";
import { verifyHrAccessToken } from "@frameworks/middlewares/authentication/hrMiddleware";
import GenerateToken from "@infrastructure/services/generateToken";
import { OtpManager } from "@infrastructure/services/otpManager";
import { SequelizeHrRepository } from "@infrastructure/repository/SequelizeHrRepository";
import { SequelizeTeamRepository } from "@infrastructure/repository/SequelizeTeamRepository";
import { Router } from "express";



const router = Router()
const generateToken = new GenerateToken()
const otpManager = new OtpManager
const nodeMailer = new NodeMailer
const sequelizeHrRepository = new SequelizeHrRepository()
const sequelizeTeamRepository = new SequelizeTeamRepository()
const hrUsecase = new HrUsecase(sequelizeHrRepository,nodeMailer, otpManager, generateToken, sequelizeTeamRepository)
const hrController = new HrController(hrUsecase)

router.post('/login', hrController.hrLogin.bind(hrController))
router.post('/verify-otp', hrController.verifyOtp.bind(hrController))
// router.post('/token',verifyHrRefreshToken, hrController.refreshToken.bind(hrController))
router.get('/', verifyHrAccessToken, hrController.getHr.bind(hrController))
router.post('/add-employee', verifyHrAccessToken, hrController.addEmployee.bind(hrController))
router.get('/employees', verifyHrAccessToken, hrController.getEmployees.bind(hrController))
router.post('/add-team', verifyHrAccessToken, hrController.createTeam.bind(hrController))
router.get('/teams', verifyHrAccessToken, hrController.getTeams.bind(hrController))


export default router