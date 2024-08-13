"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyHrRefreshToken = exports.verifyHrAccessToken = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtAccessSecret = process.env.JWT_ACCESS_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
const verifyHrAccessToken = (req, res, next) => {
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
            req.hr = payload;
        });
    }
};
exports.verifyHrAccessToken = verifyHrAccessToken;
const verifyHrRefreshToken = (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    //   console.log("token", refreshToken);
    if (!refreshToken)
        return next(http_errors_1.default.Unauthorized());
    if (jwtRefreshSecret) {
        jsonwebtoken_1.default.verify(refreshToken, jwtRefreshSecret, (err, payload) => {
            if (err) {
                console.log(err.message);
                const message = err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
                return next(http_errors_1.default.Unauthorized(message));
            }
            console.log(payload);
            req.hr = payload;
            next();
        });
    }
};
exports.verifyHrRefreshToken = verifyHrRefreshToken;
