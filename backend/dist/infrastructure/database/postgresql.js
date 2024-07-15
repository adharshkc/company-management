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
exports.connectDatabase = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const AdminModel_1 = __importDefault(require("../models/AdminModel"));
const sequelize = new sequelize_typescript_1.Sequelize({
    database: "companyManagement",
    dialect: "postgres",
    username: "postgres",
    password: "148118198",
    models: [AdminModel_1.default]
});
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("connected to dbsssfsdad");
        yield sequelize.sync({ force: false });
        console.log("database synced");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
exports.connectDatabase = connectDatabase;
exports.default = sequelize;
