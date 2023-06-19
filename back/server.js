import express from "express";
import cors from "cors";
import { signIn } from "./routes/sign-in/index.js";
import bodyParser from "body-parser";
import { listLabs } from "./routes/labs/index.js";
import { listMaterials } from "./routes/materials/index.js";
import { createAppointment } from "./routes/appointments/index.js";
import { Appointment } from "./models/appointment.js";

/**
 * Inicia o servidor.
 */
export function startServer() {
  let app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.raw());

  // Requisições
  app.post("/sign-in", signIn);
  app.get("/labs", listLabs);
  app.get("/materials", listMaterials);
  app.post("/appointments", createAppointment);

  app.listen(80, "0.0.0.0");

  console.info("Server listening...");
}
