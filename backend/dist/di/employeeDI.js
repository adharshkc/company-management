"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeController = void 0;
const LoginUsecase_1 = require("@application/use-cases/employee/LoginUsecase");
const VerifyOtpUsecase_1 = require("@application/use-cases/employee/VerifyOtpUsecase");
const EmployeeController_1 = require("@frameworks/controllers/EmployeeController");
const SequelizeEmployeeRepository_1 = require("@infrastructure/repository/SequelizeEmployeeRepository");
const generateToken_1 = __importDefault(require("@infrastructure/services/generateToken"));
const nodeMailer_1 = __importDefault(require("@infrastructure/services/nodeMailer"));
const otpManager_1 = require("@infrastructure/services/otpManager");
const generateToken = new generateToken_1.default();
const otpManager = new otpManager_1.OtpManager();
const nodeMailer = new nodeMailer_1.default();
const sequelizeEmployeeRepository = new SequelizeEmployeeRepository_1.SequelizeEmployeeRepository();
const loginUsecase = new LoginUsecase_1.LoginUsecase(sequelizeEmployeeRepository, otpManager, nodeMailer);
const verifyOtp = new VerifyOtpUsecase_1.VerifyOtpUsecase(sequelizeEmployeeRepository, otpManager, generateToken);
const employeeController = new EmployeeController_1.EmployeeController(loginUsecase, verifyOtp);
exports.employeeController = employeeController;
