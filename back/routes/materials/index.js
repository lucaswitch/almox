import { Material } from "../../models/index.js";

/**
 * Lida com request de materiais
 */
export async function listMaterials(request, response) {
  const materials = await Material.findAll();
  return response.status(200).json(materials);
}
