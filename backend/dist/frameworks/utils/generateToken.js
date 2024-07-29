"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class GenerateToken {
    createAccessToken(userId, commonId, role) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    createRefreshToken(userId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const secret = process.env.JWT_REFRESH_SECRET;
                const options = {
                    expiresIn: '2d',
                    issuer: 'codilary'
                };
                jsonwebtoken_1.default.sign({ userId: userId, role: role }, secret, options, (err, token) => {
                    if (err) {
                        return reject(new Error("Error signing token"));
                    }
                    if (!token) {
                        return reject(new Error("Refresh Token generation failed"));
                    }
                    resolve(token);
                });
            });
        });
    }
}
exports.default = GenerateToken;
