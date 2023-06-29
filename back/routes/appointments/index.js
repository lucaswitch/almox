import { Lab } from "../../models/lab.js";
import { Material } from "../../models/material.js";
import { Appointment } from "../../models/appointment.js";
import { AppointmentMaterial } from "../../models/appointment-material.js";
import { sequelize } from "./../../models";

import moment from "moment";

/**
 * Cria marcação de horário de laboratório.
 */
export async function createAppointment(request, response) {
  const { lab_id, student_capacity, scheduled_at, materials, note } =
    request.body;

  const scheduledAt = moment(scheduled_at * 1000);
  try {
    const lab = await Lab.findByPk(lab_id);
    const materials = [];
    for (const { id } of materials) {
      materials.push(await Material.findByPk(id));
    }

    // De fato criar a marcação.
    const appointment = await Appointment.create({
      lab_id: lab.id,
      scheduled_at: scheduledAt.format("YYYY-MM-DD HH:mm:ss"),
      student_capacity: student_capacity,
      note: note,
      created_at: moment().utc().unix(),
      updated_at: moment().utc().unix(),
      scheduled_by: 1,
    });

    for (const i in materials) {
      const material = materials[i];
      await AppointmentMaterial.create({
        material_id: material.id,
        appointment_id: appointment.id,
        quantity: materials[i].quantity,
        created_at: moment().utc().unix(),
        updated_at: moment().utc().unix(),
      });
    }

    return response.status(200).json({
      appointment,
      materials: materials.map(function (material, i) {
        return { ...material.dataValues, quantity: materials[i].quantity };
      }),
    });
  } catch (err) {
    return response.status(400).json(err.toString());
  }
}

// todo
export async function listAppointments() {
  await sequelize.query(`
    SELECT 
        DISTINCT ON(appointment.id)
        appointment.*
        json_agg(
            DISTINCT
            jsonb_build_object(
                'id', material.id
            )
        ) as materials
    FROM
        appointment
        INNER JOIN user ON user.id = appointment.scheduled_by
        INNER JOIN lab ON lab.id = appointment.lab_id]
        INNER JOIN appointment_material ON appointment_material.appointment_id = appointment.id
        INNER JOIN material ON material.id = appointment_material.material_id
    WHERE
        1=1
        
    GROUP BY(appointment.id)
  `);
}
