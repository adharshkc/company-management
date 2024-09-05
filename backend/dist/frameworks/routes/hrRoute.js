"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hrDI_1 = require("@di/hrDI");
const hrMiddleware_1 = require("@frameworks/middlewares/authentication/hrMiddleware");
const express_1 = require("express");
const hrRouter = (0, express_1.Router)();
hrRouter.post('/login', hrDI_1.hrController.hrLogin.bind(hrDI_1.hrController));
hrRouter.post('/verify-otp', hrDI_1.hrController.verifyOtp.bind(hrDI_1.hrController));
hrRouter.post('/add-employee', hrMiddleware_1.verifyHrAccessToken, hrDI_1.hrController.addEmployee.bind(hrDI_1.hrController));
hrRouter.post('/add-team', hrMiddleware_1.verifyHrAccessToken, hrDI_1.hrController.createTeam.bind(hrDI_1.hrController));
hrRouter.get('/', hrMiddleware_1.verifyHrAccessToken, hrDI_1.hrController.getHr.bind(hrDI_1.hrController));
hrRouter.get('/employees', hrMiddleware_1.verifyHrAccessToken, hrDI_1.hrController.getEmployees.bind(hrDI_1.hrController));
hrRouter.get('/teams', hrMiddleware_1.verifyHrAccessToken, hrDI_1.hrController.getTeams.bind(hrDI_1.hrController));
exports.default = hrRouter;