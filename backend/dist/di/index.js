"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hrController = exports.projectController = exports.adminController = void 0;
const adminDI_1 = require("./adminDI");
Object.defineProperty(exports, "adminController", { enumerable: true, get: function () { return adminDI_1.adminController; } });
const projectDI_1 = require("./projectDI");
Object.defineProperty(exports, "projectController", { enumerable: true, get: function () { return projectDI_1.projectController; } });
const hrDi_1 = require("./hrDi");
Object.defineProperty(exports, "hrController", { enumerable: true, get: function () { return hrDi_1.hrController; } });
