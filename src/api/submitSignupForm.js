import axios from 'axios';
import { SignupRequestError } from './SignupRequestError';
import { strict } from 'url-utm-params';

const signupEndpoint = '/agents/api/signup-one';
const waitlistEndpoint = '/agents/api/waitlist';

const processResponse = (response) => {
    const { data } = response;
    if (!data) {
        throw new Error('Unknown response from server');
    } else if (data.success !== true) {
        throw new SignupRequestError(data.error);
    }
    return data;
};

const getUtm = () => {
    const utm = strict(window.location) ?? {};
    if (Object.keys(utm).length === 0) {
        return undefined;
    }
    return utm;
};

export async function submitSignupForm(payload) {
    return processResponse(await axios({
        method: 'POST',
        url: signupEndpoint,
        data: { ...payload, utm: getUtm() },
    }));
}

export async function submitSignupFormStep2(payload) {
    return processResponse(await axios({
        method: 'POST',
        url: '/agents/api/signup-two',
        data: payload,
    }));
}

export async function submitWaitlistForm(payload) {
    console.log("payload", payload)
    let response = processResponse(await axios({
        method: 'POST',
        url: waitlistEndpoint,
        data: { ...payload, utm: getUtm() },
    }));
    console.log("response",response)
    return response;
}
