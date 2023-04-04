import {object, string} from 'yup'
import {validate} from "../../yup.js";
import {User} from "../../models/index.js";
import jwt from 'jsonwebtoken'

export const JWT_SIGNATURE = 'askljdklsajdoklçasjdklsajdklasjdsajdklasj2o13iu9i12u3218738912%';

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
    if (!token) {
        return response.status(400).json({
            errors: {
                username: 'username ou password errados.'
            }
        });
    }
    return response.status(200).json({
        user: await getUser(request.body),
        token
    })
}

/**
 *
 * @param username
 * @param password
 * @returns {Promise<void>}
 */
async function getUser({username, password}) {
    return await User.findOne({
        where: {
            username,
            password
        }
    });
}

/**
 * Obtém token caso o username e password estejam certos.
 * @param username
 * @param password
 * @returns {Promise<string|false>}
 */
async function getToken({username, password}) {

    const user = getUser({username, password});
    if (user) {
        return jwt.sign({sub: user.id, name: user.full_name},
            JWT_SIGNATURE
        );
    }
    return false;
}
