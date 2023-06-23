
import { Lab } from "../../models/lab.js";
import moment from "moment";


export async function createLab(request, response) {

const { name, created_at, updated_at } =
    request.body;


  const newLab = await Lab.create({
    name: name,
    created_at: moment().utc().unix(),
    updated_at: moment().utc().unix(),
  });
  
  
    return response.status(200).json(newLab);
  
}

