import { Sequelize } from "sequelize-typescript";
import AdminModel from "../models/AdminModel";
import RoleModel from "@infrastructure/models/RoleModel";

const sequelize = new Sequelize({
  database: "companyManagement",
  dialect: "postgres",
  username: "postgres",
  password: "148118198",
  logging: false,
  models: [AdminModel, RoleModel],
});

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to database");

    await sequelize.sync({ alter: true });
    console.log("database synced");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
