import { Router } from "express";
import { AdminController } from "@frameworks/controllers/AdminController";
import { SequelizeAdminRepository } from "@infrastructure/repository/SequelizeAdminRepository";
import { AdminUsecase } from "@application/use-cases/AdminUsecase";
import Bcrypt from "@frameworks/utils/bcrypt";
import GenerateToken from "@frameworks/utils/generateToken";

const router = Router();


const bcypt = new Bcrypt()
const generateToken = new GenerateToken()
const adminRepository = new SequelizeAdminRepository();
const adminUsecase = new AdminUsecase(adminRepository, bcypt, generateToken)
const adminController = new AdminController(adminUsecase)

router.post('/login', adminController.adminLogin.bind(adminController))

export default router