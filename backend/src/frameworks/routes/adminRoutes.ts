
import { adminController } from "@di/adminDI";
import { verifyAdminAccess } from "@frameworks/middlewares/authentication/jwtVerify";
import { Router } from "express";



const adminRo = Router()


adminRo.post('/login', adminController.adminLogin.bind(adminController))
adminRo.get('/',verifyAdminAccess, adminController.admin.bind(adminController))
adminRo.post('/addHr', verifyAdminAccess,adminController.createHr.bind(adminController))

export default adminRo