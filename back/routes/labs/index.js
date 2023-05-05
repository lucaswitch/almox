import { Lab } from "../../models/lab.js";

/**
 * Lida com request de login.
 */
export async function listLabs(request, response) {
  const labs = await Lab.findAll();
  return response.status(200).json(labs);
}
