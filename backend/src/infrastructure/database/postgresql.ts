import { Sequelize } from "sequelize-typescript";
const database = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const host  = process.env.DB_HOST


const sequelize = new Sequelize({
  database: database,
  dialect: "postgres",
  username: username,
  password: password,
  logging: false,
  host: host,
  models: [__dirname+'/../models'],
});

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to database");

    try {
      await sequelize.sync({ alter: true });
      console.log("database synced");
    } catch (error) {
      console.log(error)
    }

  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
