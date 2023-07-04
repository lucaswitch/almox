import { Material } from "../../models/index.js";

/**
 * Lida com request de materiais
 */
export async function getMaterials(request, response) {
  const materials = await Material.findAll();
  return response.status(200).json(materials);
}

/**
 * Lida com request de criação e atualização de materiais.
 * @param request
 * @param response
 * @return {Promise<void>}
 */
export async function postMaterials(request, response) {
  const { name, formula, concentration, weight, brand, observation, metric } =
    request.body;
  try {
    const material = await Material.create({
      name,
      formula,
      concentration,
      weight,
      brand,
      observation,
      metric,
    });
    if (!material) {
      return response.status(201).json(null);
    }
    throw new Error("Não foi possível criar este material.");
  } catch (err) {
    return response.status(400).json(err.toString());
  }
}

/**
 * Lida com request de criação de estoque de material.
 * @param request
 * @param response
 * @return {Promise<void>}
 */
export async function postMaterialStock(request, response) {}
