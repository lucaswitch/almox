import { object, string } from "yup";
import { validate } from "../../yup.js";
import { Lab } from "../../models/index.js";

/**
 * Lida com request de login.
 */
export async function listLabs(request, response) {
  return response.status(200).json({});
}
