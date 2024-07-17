"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminController_1 = require("@frameworks/controllers/AdminController");
const router = (0, express_1.Router)();
// const adminRepository = new SequelizeAdminRepository();
const adminController = new AdminController_1.AdminController();
router.post('/login', adminController.adminLogin);
exports.default = router;
