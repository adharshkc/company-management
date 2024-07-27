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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const sequelize = new sequelize_typescript_1.Sequelize({
    database: database,
    dialect: "postgres",
    username: username,
    password: password,
    logging: false,
    host: host,
    models: [__dirname + '/../models'],
});
// Object.values(associations).forEach((model:any)=>{
//   if(model.associate){
//     model.associate(sequelize.models)
//   }
// })
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("connected to database");
        try {
            yield sequelize.sync({ alter: true });
            console.log("database synced");
        }
        catch (error) {
            console.log(error);
        }
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
exports.connectDatabase = connectDatabase;
exports.default = sequelize;
