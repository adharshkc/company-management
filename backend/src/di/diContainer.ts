import { AddHrUsecase } from "@application/use-cases/admin/AddHrUsecase";
import { AdminLoginUsecase } from "@application/use-cases/admin/AdminLoginUsecase";
import { GetAdmin } from "@application/use-cases/admin/GetAdmin";
import { AdminController } from "@frameworks/controllers/AdminController";
import { SequelizeAdminRepository } from "@infrastructure/repository/SequelizeAdminRepository";
import Bcrypt from "@infrastructure/services/bcrypt";
import GenerateToken from "@infrastructure/services/generateToken";
import NodeMailer from "@infrastructure/services/nodeMailer";





const bcrypt = new Bcrypt()
const generateToken = new GenerateToken()
const generateMail = new NodeMailer()
const adminRepository = new SequelizeAdminRepository()
const adminLoginUsecase = new AdminLoginUsecase(adminRepository,bcrypt,generateToken)

const addHrUsecase = new AddHrUsecase(adminRepository, generateToken, generateMail)
const getAdmin = new GetAdmin(adminRepository)
const adminController = new AdminController(adminLoginUsecase, addHrUsecase, getAdmin)



export {adminController, addHrUsecase}