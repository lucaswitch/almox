import express from "express";
import {signIn} from "./routes/sign-in/index.js";
import bodyParser from "body-parser";
import {listLabs} from "./routes/labs/index.js";
import {listMaterials} from "./routes/materials/index.js";
import {createAppointment} from "./routes/appointments/index.js";
import {Appointment} from "./models/appointment.js";

/**
 * Inicia o servidor.
 */
export function startServer() {
    let app = express();
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());

    // Requisições
    app.post("/sign-in", signIn);
    app.get("/labs", listLabs);
    app.get("/materials", listMaterials);
    app.post("/appointments", createAppointment);
    app.get(
        "/appointments",
        async function (request, response) {
            const query = request.query;
            let appointments = await Appointment.findAll();
            if (query?.lab_id) {
                appointments = appointments.filter(function (appointment) {
                    return appointment.lab_id == query.lab_id
                })
            }

            return response.json(
                appointments
            )
        }
    );


    app.listen(80);

    console.info("Server listening...");
}
