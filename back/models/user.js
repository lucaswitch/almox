import { DataTypes } from "sequelize";
import sequelize from "./index.js";

export const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
    timestamps: false,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);
