import { DataTypes } from "sequelize";
import { Lab, sequelize, User } from "./index.js";

export const Appointment = sequelize.define(
  "appointment",
  {
    lab_id: {
      allowNull: false,
      type: DataTypes.BIGINT,
      references: {
        model: Lab.name,
        key: "id",
      },
    },
    scheduled_by: {
      allowNull: false,
      type: DataTypes.BIGINT,
      references: {
        model: User.name,
        key: "id",
      },
    },
    note: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    student_capacity: {
      allowNull: true,
      type: DataTypes.INTEGER,
      default: 1,
    },
    scheduled_at: {
      allowNull: false,
      type: DataTypes.DATE,
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
    tableName: "appointment",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);
