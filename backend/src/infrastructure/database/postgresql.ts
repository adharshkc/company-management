import { Sequelize } from "sequelize-typescript";
import AdminModel from "../models/AdminModel";

const sequelize = new Sequelize({
  database: "companyManagement",
  dialect: "postgres",
  username: "postgres",
  password: "148118198",
  models:[AdminModel]
});

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to dbsssd");

    await sequelize.sync({force: false})
    console.log("database synced")
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
