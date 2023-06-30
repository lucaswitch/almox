import { Lab } from "../../models/index.js";
import {
  Material,
  Appointment,
  AppointmentMaterial,
  sequelize,
} from "../../models/index.js";
import moment from "moment";
import { QueryTypes } from "sequelize";

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
      created_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      updated_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      scheduled_by: 1,
    });

    for (const i in materials) {
      const material = materials[i];
      await AppointmentMaterial.create({
        material_id: material.id,
        appointment_id: appointment.id,
        quantity: materials[i].quantity,
        created_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
        updated_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
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

/**
 * Lista itens de agenda.
 * @return {Promise<void>}
 */
export async function listAppointments(req, res) {
  const [appointments] = await sequelize.query(
    `
    SELECT
        appointment.*,
        JSON_OBJECT(
            'id', lab.id,
            'name', lab.name
        ) as lab        
    FROM
        appointment
        INNER JOIN lab ON lab.id = appointment.lab_id
        
    WHERE
        1=1        
    ORDER BY appointment.scheduled_at DESC
    LIMIT 10; 
  `,
    { raw: true }
  );
  return res.status(200).json(appointments);
}
