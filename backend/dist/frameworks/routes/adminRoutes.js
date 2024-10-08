"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adminDI_1 = require("@di/adminDI");
const jwtVerify_1 = require("@frameworks/middlewares/authentication/jwtVerify");
const express_1 = require("express");
const adminRo = (0, express_1.Router)();
adminRo.post('/login', adminDI_1.adminController.adminLogin.bind(adminDI_1.adminController));
adminRo.get('/', jwtVerify_1.verifyAdminAccess, adminDI_1.adminController.admin.bind(adminDI_1.adminController));
adminRo.post('/addHr', jwtVerify_1.verifyAdminAccess, adminDI_1.adminController.createHr.bind(adminDI_1.adminController));
exports.default = adminRo;
