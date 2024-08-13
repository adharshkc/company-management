"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class GenerateToken {
    async createAccessToken(userId, commonId, role) {
        return new Promise((resolve, reject) => {
            const secret = process.env.JWT_ACCESS_SECRET;
            // const payload = {
            // };
            const options = {
                expiresIn: "10h",
                issuer: "codilary",
            };
            if (secret) {
                jsonwebtoken_1.default.sign({ userId: userId, commonId: commonId, role: role }, secret, options, (err, token) => {
                    if (err) {
                        return reject(new Error("Error signing token"));
                    }
                    if (!token) {
                        return reject(new Error("Access Token generation failed"));
                    }
                    resolve(token);
                });
            }
            else {
                reject(new Error("JWT secret is not defined"));
            }
        });
    }
    async createRefreshToken(userId, commonId, role) {
        return new Promise((resolve, reject) => {
            const secret = process.env.JWT_REFRESH_SECRET;
            const options = {
                expiresIn: "2d",
                issuer: "codilary",
            };
            jsonwebtoken_1.default.sign({ userId: userId, commonId: commonId, role: role }, secret, options, (err, token) => {
                if (err) {
                    return reject(new Error("Error signing token"));
                }
                if (!token) {
                    return reject(new Error("Refresh Token generation failed"));
                }
                resolve(token);
            });
        });
    }
}
exports.default = GenerateToken;
