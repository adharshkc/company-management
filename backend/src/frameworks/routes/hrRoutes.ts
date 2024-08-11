import { HrUsecase } from "@application/use-cases/HrUsecase";
import { HrController } from "@frameworks/controllers/HrController";
import NodeMailer from "@frameworks/mailer/nodeMailer";
import { OtpManager } from "@frameworks/utils/otpManager";
import { SequelizeHrRepository } from "@infrastructure/repository/SequelizeHrRepository";
import { Router } from "express";



const router = Router()
const otpManager = new OtpManager
const nodeMailer = new NodeMailer
const sequelizeHrRepository = new SequelizeHrRepository()
const hrUsecase = new HrUsecase(sequelizeHrRepository,nodeMailer, otpManager)
const hrController = new HrController(hrUsecase)

router.post('/login', hrController.hrLogin.bind(hrController))
router.post('/verify-otp', hrController.verifyOtp.bind(hrController))


export default router