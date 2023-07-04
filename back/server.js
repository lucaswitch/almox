import express from "express";
import cors from "cors";
import { signIn } from "./routes/sign-in/index.js";
import { createUser } from "./routes/sign-up/index.js";
import bodyParser from "body-parser";
import { listLabs } from "./routes/labs/index.js";
import { getMaterials, postMaterials } from "./routes/materials/index.js";
import {
  createAppointment,
  listAppointments,
} from "./routes/appointments/index.js";
import { listUser } from "./routes/user/index.js";
import { createLab } from "./routes/createLab/index.js";
import { createMaterial } from "./routes/createMaterial/index.js";

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

  // Materiais
  app.get("/materials", getMaterials);
  app.post("/materials", postMaterials);

  // Agenda
  app.post("/appointments", createAppointment);
  app.get("/appointments", listAppointments);

  app.post("/createLab", createLab);
  app.post("/createMaterial", createMaterial);
  app.get("/user", listUser);
  app.post("/sign-up", createUser);

  app.listen(82, "localhost");

  console.info("Server listening...");
}
