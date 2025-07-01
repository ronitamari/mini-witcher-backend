import { Sequelize } from "sequelize";
import { appConfig } from "../Config/app.config";

export const sequelize = new Sequelize(appConfig.dbName!, appConfig.dbUsername!, appConfig.dbPassword, {
  host: appConfig.dbHost,
  dialect: "postgres",
  logging: false,
});

export const connection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
