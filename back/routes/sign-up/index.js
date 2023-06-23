import { User } from "../../models/user.js";
import moment from "moment";

export async function createUser(request, response) {
<<<<<<< HEAD
  const signUpSchema = object({
    username: string().required(),
    password: string().required(),
    full_name: string().required(),
  });

  const validation = await validate(request.body, signUpSchema);
  if (!validation.valid) {
    console.log("Error validation");
    return response.status(400).json({ errors: validation.errors });
  }

  const { username, password, full_name } = request.body;
  return response.status(200).json({
    newUser: await User.create({
      username,
      password,
      full_name,
      created_at: moment().utc().unix(),
      updated_at: moment().utc().unix(),
    }),
  });
}
=======
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
>>>>>>> 133e92c0562646bf8705208f5d190923f8e99da1
