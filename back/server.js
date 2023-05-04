import express from "express";
import { signIn } from "./routes/sign-in/index.js";
import bodyParser from "body-parser";
import { listLabs } from "./routes/labs/index.js";

/**
 * Inicia o servidor.
 */
export function startServer() {
  let app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.raw());

  app.post("/sign-in", signIn);
  app.get("/labs", listLabs);
  app.listen(3000);

  console.info("Server listening...");
}
