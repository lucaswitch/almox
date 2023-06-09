import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _SequelizeMeta from "./SequelizeMeta.js";
import _Appointment from "./appointment.js";
import _AppointmentMaterial from "./appointment_material.js";
import _Lab from "./lab.js";
import _Material from "./material.js";
import _User from "./user.js";

export default function initModels(sequelize) {
  const SequelizeMeta = _SequelizeMeta.init(sequelize, DataTypes);
  const Appointment = _Appointment.init(sequelize, DataTypes);
  const AppointmentMaterial = _AppointmentMaterial.init(sequelize, DataTypes);
  const Lab = _Lab.init(sequelize, DataTypes);
  const Material = _Material.init(sequelize, DataTypes);
  const User = _User.init(sequelize, DataTypes);

  return {
    SequelizeMeta,
    Appointment,
    AppointmentMaterial,
    Lab,
    Material,
    User,
  };
}
