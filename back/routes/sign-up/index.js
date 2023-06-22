import { User } from "../../models/user.js";
import { validate } from "../../yup.js";
import { object, string } from "yup";
import moment from "moment";


export async function createUser(request, response) {

  const signUpSchema = object({
    username: string().required(),
    password: string().required(),
    full_name: string().required(),
  });

  const validation = await validate(request.body, signUpSchema);

  if (!validation.valid) {
    console.log("Error validation")
    return response.status(400).json({ errors: validation.errors });
  }

  return response.status(200).json({
    newUser : await User.create({
      username: username,
      password: password,
      full_name: full_name,
      created_at: moment().utc().unix(),
      updated_at: moment().utc().unix(),
    })
  });
}