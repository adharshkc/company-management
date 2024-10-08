"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const ExpressServer_1 = __importDefault(require("@frameworks/webserver/ExpressServer"));
require("dotenv/config");
const postgresql_1 = require("@infrastructure/database/postgresql");
const userRoutes_1 = __importDefault(require("@frameworks/routes/userRoutes"));
const hrRoute_1 = __importDefault(require("@frameworks/routes/hrRoute"));
const employeeRoute_1 = __importDefault(require("@frameworks/routes/employeeRoute"));
const ErrorHandler_1 = __importDefault(require("@frameworks/middlewares/errors/ErrorHandler"));
const GlobalErrorHandler_1 = __importDefault(require("@frameworks/middlewares/errors/GlobalErrorHandler"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("@frameworks/middlewares/logging/logger"));
const redis_1 = require("@infrastructure/database/redis");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const adminRoute_1 = __importDefault(require("@frameworks/routes/adminRoute"));
const projectRoute_1 = __importDefault(require("@frameworks/routes/projectRoute"));
ExpressServer_1.default.use((0, cookie_parser_1.default)());
const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173/',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionSuccessStatus: 200
};
ExpressServer_1.default.use((0, cors_1.default)(corsOptions));
ExpressServer_1.default.use(logger_1.default);
ExpressServer_1.default.use("/api/v1/admin", adminRoute_1.default);
ExpressServer_1.default.use("/api/v1/common", userRoutes_1.default);
ExpressServer_1.default.use("/api/v1/projects", projectRoute_1.default);
ExpressServer_1.default.use("/api/v1/hr", hrRoute_1.default);
ExpressServer_1.default.use("/api/v1/", employeeRoute_1.default);
ExpressServer_1.default.use;
ExpressServer_1.default.use(ErrorHandler_1.default);
ExpressServer_1.default.use(GlobalErrorHandler_1.default);
(0, postgresql_1.connectDatabase)();
(0, redis_1.initializeRedisConnection)().then(() => console.log('redis connected'));
ExpressServer_1.default.listen(process.env.PORT, () => {
    console.log("server started on port:", process.env.PORT);
});
