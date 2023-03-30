import axios from 'axios';

const validateEndpoint = '/agents/api/signup-valid';

export const validateSignupForm = async (payload) => {
    try {
        await axios({
            method: 'POST',
            url: validateEndpoint,
            data: { ...payload },
        });
        return undefined;
    }
    catch (error) {
        if (error?.response != null) {
            const { response: { status, data } } = error;
            if (status === 400 || status === 409) {
                return data.errors;
            }
        }
        return 'Unknown error';
    }
};
