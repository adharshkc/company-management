import { LoginUsecase } from "@application/use-cases/employee/LoginUsecase"
import { VerifyOtpUsecase } from "@application/use-cases/employee/VerifyOtpUsecase"
import { EmployeeController } from "@frameworks/controllers/EmployeeController"
import { SequelizeEmployeeRepository } from "@infrastructure/repository/SequelizeEmployeeRepository"
import GenerateToken from "@infrastructure/services/generateToken"
import NodeMailer from "@infrastructure/services/nodeMailer"
import { OtpManager } from "@infrastructure/services/otpManager"



const generateToken = new GenerateToken()
const otpManager = new OtpManager()
const nodeMailer = new NodeMailer()
const sequelizeEmployeeRepository = new SequelizeEmployeeRepository()
const loginUsecase = new LoginUsecase(sequelizeEmployeeRepository,otpManager, nodeMailer)
const verifyOtp = new VerifyOtpUsecase(sequelizeEmployeeRepository,otpManager,generateToken)
const employeeController = new EmployeeController(loginUsecase, verifyOtp)

export {employeeController}