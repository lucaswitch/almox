import express from 'express';
import {signIn} from "./routes.js";
import bodyParser from 'body-parser';
/**
 * Inicia o servidor.
 */
export function startServer() {
    let app = express()
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());

    app.post('/sign-in', signIn);
    app.listen(3000);

    console.info('Server listening...');
}
