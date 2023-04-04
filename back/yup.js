/**
 * Obtém os erros do Yup de maneira mais adequada.
 * @param data
 * @param schema
 */
export async function validate(data, schema) {
    try {
        await schema.validate(data, {abortEarly: false});
        return {
            valid: true,
            errors: {}
        };
    } catch (err) {
        const errors = {};
        let hasError = false;
        for (const {message, path} of err.inner) {
            hasError = true;
            errors[path] = message;
        }
        return {
            valid: false,
            errors: errors
        };
    }
}
