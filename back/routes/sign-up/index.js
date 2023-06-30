import { User } from "../../models/index.js";
import moment from "moment";

export async function createUser(request, response) {
  const { username, password, full_name } = request.body;

  try {
    const newUser = await User.create({
      username: username,
      password: password,
      full_name: full_name,
      created_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      updated_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
    });

    return response.status(200).json(newUser);
  } catch (err) {
    return response.status(400).json(err.toString());
  }
}
