"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const ExpressServer_1 = __importDefault(require("@frameworks/webserver/ExpressServer"));
require("dotenv/config");
const postgresql_1 = require("@infrastructure/database/postgresql");
const adminRoutes_1 = __importDefault(require("@frameworks/routes/adminRoutes"));
ExpressServer_1.default.use('/admin', adminRoutes_1.default);
(0, postgresql_1.connectDatabase)();
ExpressServer_1.default.listen(process.env.PORT, () => {
    console.log("server started on port: ", process.env.PORT);
});
