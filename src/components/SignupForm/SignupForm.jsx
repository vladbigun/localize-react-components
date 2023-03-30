import React, {useCallback, useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {Form, Formik} from 'formik';
import { FullNameField } from '../field-components/FullNameField';
import { EmailField } from '../field-components/EmailField';
import { PhoneField } from '../field-components/PhoneField';
import { BrokerageField } from '../field-components/BrokerageField';
import { Button } from '../Button/Button';
import { submitSignupForm } from '../../api/submitSignupForm';
import { noop } from '../../utils/noop';
import { validateSignupForm } from '../../api/validateSignupForm';

import './SignupForm.scss';
import {AssetsContext} from "../../context/AssetsContext";
import {SubmitContext} from "../../context/SubmitContext";
import {useHistory} from "react-router-dom";


const defaultInitialValues = {
    full_name: '',
    email: '',
    phone_number: '',
    brokerage_name: '',
};

const useAsyncState = (cb, deps) => {
    const [pending, setPending] = useState(false);
    const fn = useCallback(async (...args) => {
        setPending(true);
        try {
            return await cb(...args);
        } finally {
            setPending(false);
        }
    }, deps);
    return [pending, fn];
};

export const SignupForm = () => {
    const history = useHistory();
    const initialValues = {
        ...defaultInitialValues,
    }
    const {
        activeBrokerageField,
        brokerageNameOptions,
    } = useContext(AssetsContext);

    const [resultSubmit, setResultSubmit] = useState({'success' : null});
    const [emailValidating, emailValidateUnique] = useAsyncState((value) => validateSignupForm({ email: value }), []);
    const [phoneValidating, phoneValidateUnique] = useAsyncState((value) => validateSignupForm({ phone_number: value }), []);

    const isValidating = emailValidating || phoneValidating;
    const onSubmit = async (values) => {
        const result = await submitSignupForm(values);
        if (result.redirect) {
            if(values.who_working){
                if(values.who_working === 'my-entire-brokerage'){
                    window.location.href = '/agents/signup/brokerage-thank-you';
                    return true;
                }
            }
            history.push({
                pathname: '/agents/signup/',
                search: '?step=2&idForm=' + result.redirect,
            });
            // Do not set submitting to false here to prevent button blinking before redirect happens
            return new Promise(noop);
        }
    };
    const initialErrors = (value, key) => {
        if(key === 'who_working') return null;
        if(key === 'brokerage_name') return 'This is a required field'
        else return 'error'
    }

    const formikOptions = {
        initialValues,
        onSubmit,
        validateOnChange: false,
        validateOnBlur: false,
        initialErrors: mapKeys(initialValues, (value, key) => initialErrors(value, key)),
    };
    return (
        <SubmitContext.Provider
            value={{
                resultSubmit,
                setResultSubmit
            }}
        >
            <Formik {...formikOptions}>
                {({ isSubmitting, isValid, dirty}) => (
                            <Form className="lcz-form">
                                {
                                    !activeBrokerageField &&
                                    <div className="lcz-form_signup-upload-leads">
                                        Sign up and upload 100 or more of your leads, and get a $100 Amazon gift card.
                                    </div>
                                }
                                <section className="lcz-form__section">
                                    <FullNameField name="full_name"/>
                                    <EmailField name="email" validate={emailValidateUnique}/>
                                    <PhoneField name="phone_number" validate={phoneValidateUnique}/>
                                    <BrokerageField name="brokerage_name" items={brokerageNameOptions}/>
                                    {/*<WhoWorkingField name="who_working" items={whoWorkingOptions} active={activeBrokerageField}/>*/}
                                </section>
                                <section className="lcz-form__section lcz-form__submit-section">
                                    <div className="lcz-form__checking">
                                    { isValidating &&
                                        <>
                                            <div className="lcz-form__checking-spinner">
                                            </div>
                                            <div className="lcz-form__checking-text">
                                                Checking...
                                            </div>
                                        </>
                                    }
                                    </div>
                                    <p className="lcz-form__submit-row">
                                        <Button submit disabled={isValidating || isSubmitting || !isValid || !dirty}>continue</Button>
                                    </p>
                                </section>

                            </Form>
                )}
            </Formik>
        </SubmitContext.Provider>
    );
};

SignupForm.propTypes = {
    data: PropTypes.object,
};

function mapKeys(obj, mapFn) {
    const result = {};
    Object.entries(obj).forEach(([key, value]) => {
        result[key] = mapFn(value, key);
    });
    return result;
}
