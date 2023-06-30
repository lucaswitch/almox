import { Material } from "../../models/index.js";
import moment from "moment";

export async function createMaterial(request, response) {
  const {
    name,
    metric,
    created_at,
    updated_at,
    lote,
    formulaQui,
    concentration,
    peso,
    marca,
    quantidade,
    estoque,
    observation,
    dtValid,
    dtEntrad,
  } = request.body;

  const newMaterial = await Material.create({
    name: name,
    metric: metric,
    lote: lote,
    formulaQui: formulaQui,
    concentration: concentration,
    peso: peso,
    marca: marca,
    quantidade: quantidade,
    estoque: estoque,
    observation: observation,
    dtValid: dtValid,
    dtEntrad: dtEntrad,
    created_at: moment().utc().unix(),
    updated_at: moment().utc().unix(),
  });

  return response.status(200).json(newMaterial);
}
