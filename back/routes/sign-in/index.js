import {object, string} from 'yup'
import {validate} from "../../yup.js";
import {User} from "../../models/definitions/index.js";

/**
 * Lida com request de login.
 */
export async function signIn(request, response) {
    const signInSchema = object({
        username: string().required(),
        password: string().required()
    });
    const validation = await validate(request.body, signInSchema);
    if (!validation.valid) {
        return response.status(400).json({errors: validation.errors})
    }

    const token = await getToken(request.body);
    response.status(200).json({})
}


async function getToken({username, password}) {
    const found = await User.findOne({
        where: {
            username
        }
    });
    console.log('found', found)
}
