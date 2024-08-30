"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwtVerify_1 = require("@frameworks/middlewares/authentication/jwtVerify");
const router = (0, express_1.Router)();
// const bcypt = new Bcrypt();
// const generateToken = new GenerateToken();
// const nodeMailer = new NodeMailer
// const adminRepository = new SequelizeAdminRepository();
// const adminUsecase = new AdminUsecase(adminRepository, bcypt, generateToken, nodeMailer);
// const adminController = new AdminController(adminUsecase);
// router.post("/login", adminController.adminLogin.bind(adminController));
// router.get(
//   "/",
//   verifyAdminAccess,
//   adminController.getAdmin.bind(adminController)
// );
// router.post("/addHr", adminController.createHr.bind(adminController))
const ProjectUsecase_1 = require("@application/use-cases/ProjectUsecase");
const SequelizeProjectRepository_1 = require("@infrastructure/repository/SequelizeProjectRepository");
const ProjectController_1 = require("@frameworks/controllers/ProjectController");
const projectRepository = new SequelizeProjectRepository_1.SequelizeProjectRepository();
const projectUsecase = new ProjectUsecase_1.ProjectUsecase(projectRepository);
const projectController = new ProjectController_1.ProjectController(projectUsecase);
router.post('/projects/create', jwtVerify_1.verifyAdminAccess, projectController.createProject.bind(projectController));
router.get('/projects', jwtVerify_1.verifyAdminAccess, projectController.getProjects.bind(projectController));
exports.default = router;
