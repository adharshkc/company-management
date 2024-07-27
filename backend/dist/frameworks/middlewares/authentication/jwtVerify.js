"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdminRefresh = exports.verifyAdminAccess = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtAccessSecret = process.env.JWT_ACCESS_SECRET;
const verifyAdminAccess = (req, res, next) => {
    const authorization = req.header("Authorization");
    if (!authorization)
        return next(http_errors_1.default.Unauthorized());
    const bearerToken = authorization.split(" ");
    const token = bearerToken[1];
    if (jwtAccessSecret) {
        jsonwebtoken_1.default.verify(token, jwtAccessSecret, (err, payload) => {
            if (err) {
                // if(err.name==='JsonWebTokenError'){
                //   return next(createError.Unauthorized());
                // }else{
                //   return next(createError.Unauthorized(err.message))
                // }
                const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
                return next(http_errors_1.default.Unauthorized(message));
            }
            req.adminId = payload;
            next();
        });
    }
};
exports.verifyAdminAccess = verifyAdminAccess;
const verifyAdminRefresh = (refreshToken) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(refreshToken, jwtAccessSecret, (err, payload) => {
            if (err)
                return reject(http_errors_1.default.Unauthorized());
            resolve(payload);
        });
    });
};
exports.verifyAdminRefresh = verifyAdminRefresh;
