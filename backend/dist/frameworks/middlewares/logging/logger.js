"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const morgan_1 = __importDefault(require("morgan"));
const { combine, timestamp, json } = winston_1.default.format;
const logger = winston_1.default.createLogger({
    level: "http",
    format: combine(timestamp({
        format: "YYYY-MM-DD hh:mm:ss .SS A",
    }), json()),
    transports: [new winston_1.default.transports.Console()],
});
const morganMiddleware = (0, morgan_1.default)(":method :url :status :res[content-length] - :response-time ms", {
    stream: {
        write: (message) => logger.http(message.trim()),
    },
});
exports.default = morganMiddleware;
