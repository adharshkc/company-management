import { Router } from "express";
import { AdminController } from "@frameworks/controllers/AdminController";
import { SequelizeAdminRepository } from "@infrastructure/repository/SequelizeAdminRepository";
import { AdminUsecase } from "@application/use-cases/AdminUsecase";
import Bcrypt from "@frameworks/utils/bcrypt";
import GenerateToken from "@frameworks/utils/generateToken";
import { verifyAdminAccess } from "@frameworks/middlewares/authentication/jwtVerify";
import NodeMailer from "@frameworks/mailer/nodeMailer";

const router = Router();

const bcypt = new Bcrypt();
const generateToken = new GenerateToken();
const nodeMailer = new NodeMailer
const adminRepository = new SequelizeAdminRepository();
const adminUsecase = new AdminUsecase(adminRepository, bcypt, generateToken, nodeMailer);
const adminController = new AdminController(adminUsecase);

router.post("/login", adminController.adminLogin.bind(adminController));
router.get(
  "/",
  verifyAdminAccess,
  adminController.getAdmin.bind(adminController)
);
router.post("/addHr", adminController.createHr.bind(adminController))


import { ProjectUsecase } from "@application/use-cases/ProjectUsecase";
import { SequelizeProjectRepository } from "@infrastructure/repository/SequelizeProjectRepository";
import { ProjectController } from "@frameworks/controllers/ProjectController";


const projectRepository = new SequelizeProjectRepository()
const projectUsecase = new ProjectUsecase(projectRepository)
const projectController = new ProjectController(projectUsecase)
router.post('/projects/create',verifyAdminAccess, projectController.createProject.bind(projectController) )
router.get('/projects', verifyAdminAccess, projectController.getProjects.bind(projectController))

export default router;
