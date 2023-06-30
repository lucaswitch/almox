"use strict";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import initModels from "./init-models.js";

dotenv.config();

const config = {
  username: process.env.MYSQL_DATABASE_USER,
  password: process.env.MYSQL_DATABASE_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: "127.0.0.1",
  dialect: "mysql",
  additional: {
    timestamps: false,
  },
  use_env_variable: false,
};

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    freezeTableName: true,
  }
);

export const { Appointment, AppointmentMaterial, Lab, Material, User } =
  initModels(sequelize);
