import { DataTypes } from "sequelize";
import { sequelize } from "./index.cjs";
import { Appointment } from "./appointment.js";
import { Material } from "./material.js";

export const AppointmentMaterial = sequelize.define(
  "appointment_material",
  {
    material_id: {
      allowNull: false,
      type: DataTypes.BIGINT,
      references: {
        model: Material.name,
        key: "id",
      },
    },
    appointment_id: {
      allowNull: false,
      type: DataTypes.BIGINT,
      references: {
        model: Appointment.name,
        key: "id",
      },
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
      default: 0,
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
    tableName: "appointment_material",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);
