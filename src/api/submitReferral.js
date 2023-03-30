import axios from 'axios';
import { SignupRequestError } from './SignupRequestError';

const referralEndpoint = '/agents/api/referral';

const processResponse = (response) => {
    const { data } = response;
    if (!data) {
        throw new Error('Unknown response from server');
    } else if (data.success !== true) {
        throw new SignupRequestError(data.error);
    }
    return data;
};

export async function submitReferral(payload) {
    return processResponse(await axios({
        method: 'POST',
        url: referralEndpoint,
        data: payload,
    }));
}