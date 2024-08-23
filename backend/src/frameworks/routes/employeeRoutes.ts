

import { EmployeeUsecase } from "@application/use-cases/EmployeeUsecase";
import { EmployeeController } from "@frameworks/controllers/EmployeeController";
import NodeMailer from "@frameworks/mailer/nodeMailer";
import { verifyEmployeeAccessToken } from "@frameworks/middlewares/authentication/employeeMiddleware";
import GenerateToken from "@frameworks/utils/generateToken";
import { OtpManager } from "@frameworks/utils/otpManager";
import { SequelizeEmployeeRepository } from "@infrastructure/repository/SequelizeEmployeeRepository";
import { Router } from "express";



const router = Router()
const generateToken = new GenerateToken()
const otpManager = new OtpManager()
const nodeMailer = new NodeMailer()
const sequelizeEmployeeRepository = new SequelizeEmployeeRepository
const employeeUsecase = new EmployeeUsecase(sequelizeEmployeeRepository,otpManager, nodeMailer,generateToken)
const employeeController = new EmployeeController(employeeUsecase)

router.post('/login', employeeController.login.bind(employeeController))
router.post('/verify-otp', employeeController.verifyOtp.bind(employeeController))
router.get('/check-session',verifyEmployeeAccessToken, employeeController.checkSession.bind(employeeController))

export default router