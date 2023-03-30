export class SignupRequestError extends Error {
    constructor(errors) {
        super('Error submitting signup form');
        this.type = 'SignupRequestError';
        this.errors = errors;
    }
}
