import { object, string, number, array } from "yup";

export const FormAgendaSchema = object({
  lab_id: number()
    .typeError("Por favor, selecione o laboratório.")
    .required("Por favor, selecione o laboratório."),
  student_capacity: number()
    .min(1)
    .max(200)
    .required("Por favor, selecione a quantidade de alunos."),
  scheduled_at: string()
    .min(10)
    .max(10)
    .required("Por favor, selecione o horário de agendamento."),
  time: string()
    .min(5)
    .max(5)
    .required("Por favor, selecione o horário de agendamento."),
  materials: array()
    .min(1)
    .max(200)
    .of(
      object({
        id: number().required("Por favor, selecione o material."),
        quantity: number().required(
          "Por favor, selecione a quantidade do material."
        ),
      })
    ),
  note: string().min(0).max(2000),
});
