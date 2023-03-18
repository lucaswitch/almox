/**
 * Lida com request de login.
 */
export function signIn(request, response) {
    console.log('Got body:', request.body);
    response.json(response.body);
}

