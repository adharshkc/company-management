import { Router } from "express";
import { AdminController } from "@frameworks/controllers/AdminController";

const router = Router();
// const adminRepository = new SequelizeAdminRepository();
const adminController = new AdminController()

router.post('/login', adminController.adminLogin)

export default router