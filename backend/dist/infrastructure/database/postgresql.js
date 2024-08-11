"use strict";
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
const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("connected to database");
        try {
            await sequelize.sync({ alter: true });
            console.log("database synced");
        }
        catch (error) {
            console.log(error);
        }
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
exports.connectDatabase = connectDatabase;
exports.default = sequelize;
