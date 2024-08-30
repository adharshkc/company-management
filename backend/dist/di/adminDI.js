"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const AddHrUsecase_1 = require("@application/use-cases/admin/AddHrUsecase");
const AdminLoginUsecase_1 = require("@application/use-cases/admin/AdminLoginUsecase");
const GetAdminUsecase_1 = require("@application/use-cases/admin/GetAdminUsecase");
const AdminController_1 = require("@frameworks/controllers/AdminController");
const SequelizeAdminRepository_1 = require("@infrastructure/repository/SequelizeAdminRepository");
const bcrypt_1 = __importDefault(require("@infrastructure/services/bcrypt"));
const generateToken_1 = __importDefault(require("@infrastructure/services/generateToken"));
const nodeMailer_1 = __importDefault(require("@infrastructure/services/nodeMailer"));
const bcrypt = new bcrypt_1.default();
const generateToken = new generateToken_1.default();
const generateMail = new nodeMailer_1.default();
const adminRepository = new SequelizeAdminRepository_1.SequelizeAdminRepository();
const adminLoginUsecase = new AdminLoginUsecase_1.AdminLoginUsecase(adminRepository, bcrypt, generateToken);
const addHrUsecase = new AddHrUsecase_1.AddHrUsecase(adminRepository, generateToken, generateMail);
const getAdmin = new GetAdminUsecase_1.GetAdminUsecase(adminRepository);
const adminController = new AdminController_1.AdminController(adminLoginUsecase, addHrUsecase, getAdmin);
exports.adminController = adminController;
