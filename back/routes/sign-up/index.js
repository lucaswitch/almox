import { User } from "../../models/user.js";
import moment from "moment";


export async function createUser(request, response) {

const { username, password, full_name } =
    request.body;


  const newUser = await User.create({
    username: username,
    password: password,
    full_name: full_name,
    created_at: moment().utc().unix(),
    updated_at: moment().utc().unix(),
  });
  
  
    return response.status(200).json(newUser);
}