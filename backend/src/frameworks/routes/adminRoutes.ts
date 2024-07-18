import { Router } from "express";
import { AdminController } from "@frameworks/controllers/AdminController";
import { SequelizeAdminRepository } from "@infrastructure/repository/SequelizeAdminRepository";
import { AdminUsecase } from "@application/use-cases/AdminUsecase";

const router = Router();
const adminRepository = new SequelizeAdminRepository();
const adminUsecase = new AdminUsecase(adminRepository)
const adminController = new AdminController(adminUsecase)

router.post('/login', adminController.adminLogin.bind(adminController))

export default router