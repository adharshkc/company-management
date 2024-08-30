"use strict";
// import { EmployeeUsecase } from "@application/use-cases/EmployeeUsecase";
// import { SprintUsecase } from "@application/use-cases/SprintUsecase";
// import { EmployeeController } from "@frameworks/controllers/EmployeeController";
// import { SprintController } from "@frameworks/controllers/SprintController";
// import NodeMailer from "@infrastructure/services/nodeMailer";
// import { verifyEmployeeAccessToken } from "@frameworks/middlewares/authentication/employeeMiddleware";
// import GenerateToken from "@infrastructure/services/generateToken";
// import { OtpManager } from "@infrastructure/services/otpManager";
// import { SequelizeEmployeeRepository } from "@infrastructure/repository/SequelizeEmployeeRepository";
// import { SequelizeSprintRepository } from "@infrastructure/repository/SequelizeSprintRepository";
// import { Router } from "express";
// const router = Router()
// const generateToken = new GenerateToken()
// const otpManager = new OtpManager()
// const nodeMailer = new NodeMailer()
// const sequelizeEmployeeRepository = new SequelizeEmployeeRepository()
// const employeeUsecase = new EmployeeUsecase(sequelizeEmployeeRepository,otpManager, nodeMailer,generateToken)
// const employeeController = new EmployeeController(employeeUsecase)
// router.post('/login', employeeController.login.bind(employeeController))
// router.post('/verify-otp', employeeController.verifyOtp.bind(employeeController))
// router.get('/check-session',verifyEmployeeAccessToken, employeeController.checkSession.bind(employeeController))
// const sequelizeSprintRepository = new SequelizeSprintRepository()
// const sprintUsecase = new SprintUsecase(sequelizeSprintRepository)
// const sprintController = new SprintController(sprintUsecase)
// router.post('/project/sprint/create', verifyEmployeeAccessToken, sprintController.createSprint.bind(sprintController))
// export default router
