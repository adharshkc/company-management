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
const userRoutes_1 = __importDefault(require("@frameworks/routes/userRoutes"));
const ErrorHandler_1 = __importDefault(require("@frameworks/middlewares/errors/ErrorHandler"));
const GlobalErrorHandler_1 = __importDefault(require("@frameworks/middlewares/errors/GlobalErrorHandler"));
const cors_1 = __importDefault(require("cors"));
ExpressServer_1.default.use((0, cors_1.default)());
ExpressServer_1.default.use("/api/v1/admin", adminRoutes_1.default);
ExpressServer_1.default.use("/api/v1/", userRoutes_1.default);
ExpressServer_1.default.use(ErrorHandler_1.default);
ExpressServer_1.default.use(GlobalErrorHandler_1.default);
(0, postgresql_1.connectDatabase)();
ExpressServer_1.default.listen(process.env.PORT, () => {
    console.log("server started on port:", process.env.PORT);
});
