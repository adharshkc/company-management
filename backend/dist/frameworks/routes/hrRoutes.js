"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HrUsecase_1 = require("@application/use-cases/HrUsecase");
const HrController_1 = require("@frameworks/controllers/HrController");
const nodeMailer_1 = __importDefault(require("@frameworks/mailer/nodeMailer"));
const otpManager_1 = require("@frameworks/utils/otpManager");
const SequelizeHrRepository_1 = require("@infrastructure/repository/SequelizeHrRepository");
const express_1 = require("express");
const router = (0, express_1.Router)();
const otpManager = new otpManager_1.OtpManager;
const nodeMailer = new nodeMailer_1.default;
const sequelizeHrRepository = new SequelizeHrRepository_1.SequelizeHrRepository();
const hrUsecase = new HrUsecase_1.HrUsecase(sequelizeHrRepository, nodeMailer, otpManager);
const hrController = new HrController_1.HrController(hrUsecase);
router.post('/login', hrController.hrLogin.bind(hrController));
router.post('/verify-otp', hrController.verifyOtp.bind(hrController));
exports.default = router;
