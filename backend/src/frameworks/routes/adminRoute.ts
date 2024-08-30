
import { adminController } from "@di/adminDI";
import { verifyAdminAccess } from "@frameworks/middlewares/authentication/jwtVerify";
import { Router } from "express";



const adminRoutes = Router()


adminRoutes.post('/login', adminController.adminLogin.bind(adminController))
adminRoutes.get('/',verifyAdminAccess, adminController.admin.bind(adminController))
adminRoutes.post('/addHr', verifyAdminAccess,adminController.createHr.bind(adminController))

export default adminRoutes