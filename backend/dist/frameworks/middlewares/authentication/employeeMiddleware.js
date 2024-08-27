"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmployeeAccessToken = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtAccessSecret = process.env.JWT_ACCESS_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
const verifyEmployeeAccessToken = (req, res, next) => {
    const authorization = req.header("Authorization");
    if (!authorization)
        return next(http_errors_1.default.Unauthorized());
    const bearerToken = authorization.split(" ");
    const token = bearerToken[1];
    if (jwtAccessSecret) {
        jsonwebtoken_1.default.verify(token, jwtAccessSecret, (err, payload) => {
            if (err) {
                const message = err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
                return next(http_errors_1.default.Unauthorized(message));
            }
            console.log(payload);
            req.employee = payload;
            next();
        });
    }
};
exports.verifyEmployeeAccessToken = verifyEmployeeAccessToken;
