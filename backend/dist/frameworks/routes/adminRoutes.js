"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminController_1 = require("@frameworks/controllers/AdminController");
const SequelizeAdminRepository_1 = require("@infrastructure/repository/SequelizeAdminRepository");
const AdminUsecase_1 = require("@application/use-cases/AdminUsecase");
const bcrypt_1 = __importDefault(require("@frameworks/utils/bcrypt"));
const generateToken_1 = __importDefault(require("@frameworks/utils/generateToken"));
const router = (0, express_1.Router)();
const bcypt = new bcrypt_1.default();
const generateToken = new generateToken_1.default();
const adminRepository = new SequelizeAdminRepository_1.SequelizeAdminRepository();
const adminUsecase = new AdminUsecase_1.AdminUsecase(adminRepository, bcypt, generateToken);
const adminController = new AdminController_1.AdminController(adminUsecase);
router.post('/login', adminController.adminLogin.bind(adminController));
exports.default = router;
