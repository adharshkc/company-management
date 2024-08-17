"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HrUsecase_1 = require("@application/use-cases/HrUsecase");
const HrController_1 = require("@frameworks/controllers/HrController");
const nodeMailer_1 = __importDefault(require("@frameworks/mailer/nodeMailer"));
const hrMiddleware_1 = require("@frameworks/middlewares/authentication/hrMiddleware");
const generateToken_1 = __importDefault(require("@frameworks/utils/generateToken"));
const otpManager_1 = require("@frameworks/utils/otpManager");
const SequelizeHrRepository_1 = require("@infrastructure/repository/SequelizeHrRepository");
const express_1 = require("express");
const router = (0, express_1.Router)();
const generateToken = new generateToken_1.default();
const otpManager = new otpManager_1.OtpManager;
const nodeMailer = new nodeMailer_1.default;
const sequelizeHrRepository = new SequelizeHrRepository_1.SequelizeHrRepository();
const hrUsecase = new HrUsecase_1.HrUsecase(sequelizeHrRepository, nodeMailer, otpManager, generateToken);
const hrController = new HrController_1.HrController(hrUsecase);
router.post('/login', hrController.hrLogin.bind(hrController));
router.post('/verify-otp', hrController.verifyOtp.bind(hrController));
// router.post('/token',verifyHrRefreshToken, hrController.refreshToken.bind(hrController))
router.get('/', hrMiddleware_1.verifyHrAccessToken, hrController.getHr.bind(hrController));
exports.default = router;
