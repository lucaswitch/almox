import { Lab } from "../../models/lab.js";
import { Material } from "../../models/material.js";
import { Appointment } from "../../models/appointment.js";
import { AppointmentMaterial } from "../../models/appointment-material.js";
import moment from "moment";

/**
 * Cria marcação de horário de laboratório.
 */
export async function createAppointment(request, response) {
  /*
  {
    "lab_id": 1,
    "student_capacity": 50,
    "scheduled_at":"2023-01-01 00:00:00",
    "material_ids":[{
      "id":1,
      "quantity":1
    }],
    "note":"Resolvemos o problema!"
  }
   */
  const { lab_id, student_capacity, scheduled_at, material_ids, note } =
    request.body;

  const lab = await Lab.findByPk(lab_id);
  const materials = [];
  for (const { id, quantity } of material_ids) {
    materials.push(await Material.findByPk(id));
  }

  // De fato criar a marcação.
  const appointment = await Appointment.create({
    lab_id: lab.id,
    scheduled_at: scheduled_at,
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
      quantity: material_ids[i].quantity,
      created_at: moment().utc().unix(),
      updated_at: moment().utc().unix(),
    });
  }

  return response.status(200).json({
    appointment,
    materials: materials.map(function (material, i) {
      return { ...material.dataValues, quantity: material_ids[i].quantity };
    }),
  });
}
