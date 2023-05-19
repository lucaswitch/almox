import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";
import { Lab } from "./lab.js";
import { User } from "./user.js";

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
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
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
