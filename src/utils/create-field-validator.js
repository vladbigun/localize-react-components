import { isFunction } from 'formik';

export function createFieldValidator(externalValidate, schema) {
    return async (value) => {
        let result;

        if (isFunction(externalValidate)) {
            result = await externalValidate(value);
            if (result != null) {
                return result;
            }
        }

        if (externalValidate != null && isFunction(externalValidate.validate)) {
            result = validateSchema(externalValidate, value);
            if (result != null) {
                return result;
            }
        }

        result = validateSchema(schema, value);
        if (result != null) {
            return result;
        }

        return undefined;
    };
}

async function validateSchema(schema, value) {
    try {
        if (schema != null) {
            await schema.validate(value, { strict: true });
        }
        return undefined;
    }
    catch (err) {
        return err.message ?? err;
    }
}
