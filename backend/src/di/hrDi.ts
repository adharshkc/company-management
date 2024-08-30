import { CreateEmployeeUsecase } from "@application/use-cases/Hr/CreateEmployeeUsecase";
import { CreateTeamUsecase } from "@application/use-cases/Hr/CreateTeamUseCase";
import { GetAllEmployeesUsecase } from "@application/use-cases/Hr/GetAllEmployeeUsecase";
import { GetAllTeamsUsecase } from "@application/use-cases/Hr/GetAllTeamsUsecase";
import { GetHrUsecase } from "@application/use-cases/Hr/GetHrUsecase";
import { HrLoginUsecase } from "@application/use-cases/Hr/HrLoginUsecase";
import { VerifyOtpUsecase } from "@application/use-cases/Hr/VerifyOtpUsecase";
import { HrController } from "@frameworks/controllers/HrController";
import { SequelizeHrRepository } from "@infrastructure/repository/SequelizeHrRepository";
import { SequelizeTeamRepository } from "@infrastructure/repository/SequelizeTeamRepository";
import GenerateToken from "@infrastructure/services/generateToken";
import NodeMailer from "@infrastructure/services/nodeMailer";
import { OtpManager } from "@infrastructure/services/otpManager";








const generateToken = new GenerateToken()
const otpManager = new OtpManager()
const nodeMailer = new NodeMailer()
const sequelizeHrRepository = new SequelizeHrRepository()
const sequelizeTeamRepository = new SequelizeTeamRepository()
const hrLoginUsecase = new HrLoginUsecase(sequelizeHrRepository,otpManager,nodeMailer)
const hrVerifyOtpUsecase = new VerifyOtpUsecase(sequelizeHrRepository,generateToken, otpManager,)
const getHrUsecase = new GetHrUsecase(sequelizeHrRepository)
const createEmployeeUsecase = new CreateEmployeeUsecase(sequelizeHrRepository, generateToken,nodeMailer)
const getAllEmployeesUsecase = new GetAllEmployeesUsecase(sequelizeHrRepository)
const getAllTeamsUsecase = new GetAllTeamsUsecase(sequelizeTeamRepository)
const createTeamUsecase = new CreateTeamUsecase(sequelizeTeamRepository)

const hrController = new HrController(hrLoginUsecase, hrVerifyOtpUsecase, getHrUsecase,createEmployeeUsecase,getAllEmployeesUsecase,getAllTeamsUsecase, createTeamUsecase)

export {hrController}