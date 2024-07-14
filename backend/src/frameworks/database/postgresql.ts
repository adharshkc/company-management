import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: "companyManagement",
  dialect: "postgres",
  username: "postgres",
  password: "148118198",
});

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to db");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
