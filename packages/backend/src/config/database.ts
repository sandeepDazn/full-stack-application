import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  username: "root",
  password: "Dazn@143",
  database: "full-stack-application",
  host: "localhost",
  dialect: "mysql",
});
