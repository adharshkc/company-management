"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class Bcrypt {
    async compare(password, hashedPassword) {
        const matchPassword = await bcrypt_1.default.compare(password, hashedPassword);
        return matchPassword;
    }
}
exports.default = Bcrypt;
