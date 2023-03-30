import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Form, Formik} from 'formik';
import { FullNameField } from '../field-components/FullNameField';
import { EmailField } from '../field-components/EmailField';
import { PhoneField } from '../field-components/PhoneField';
import { Button } from '../Button/Button';

import './ReferralForm.scss';
import {submitReferral} from "../../api/submitReferral";
import {ShareBlock} from "../ShareBlock/ShareBlock";
import {validateSignupForm} from "../../api/validateSignupForm";
import {SubmitContext} from "../../context/SubmitContext";


const defaultInitialValues = {
    full_name: '',
    email: '',
    phone_number: '',
};


export const ReferralForm = ({ data = {} }) => {
    const {
        formData = {}
    } = data;
    const initialValues = {
        ...defaultInitialValues,
        ...formData,
    }

    const [resultSubmit, setResultSubmit] = useState({'success' : null});
    const [resultValidate, setResultValidate] = useState();

    const onSubmit = async (values) => {
        try {
            const result = await submitReferral(values);
            if (result.data.link) {
                setResultSubmit(result);
                const resultValidate = await validateSignupForm({email: values.email})
                setResultValidate(resultValidate);
                if(document.documentElement.clientWidth < 600){
                    if (navigator.share) {
                        navigator.share({
                            title: document.title,
                            url: result.data.link
                        }).catch(console.error);
                    } else {
                        console.log('Web Share API not supported!');
                    }
                }
            }
        }
        catch (error) {
            setResultSubmit({'success' : false});
        }
    };

    const initialErrors = (value, key) => {
        if(key === 'link') return null
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
        <>
            <SubmitContext.Provider
                value={{
                    resultSubmit,
                    setResultSubmit
                }}
            >
                <Formik {...formikOptions}>
                    {({ isSubmitting, isValid, dirty}) => (
                        <Form className="lcz-referral-form">
                            <section className="lcz-form__section">
                                <FullNameField name="full_name"/>
                                <EmailField name="email"/>
                                <PhoneField name="phone_number"/>
                            </section>
                            <section className="lcz-form__section lcz-form__submit-section">
                                <div className="lcz-form__submit-row">
                                    <Button submit
                                            disabled={!isValid || !dirty || isSubmitting}
                                            loading={isSubmitting}
                                            success={resultSubmit['success']}>
                                        {
                                            isSubmitting ?
                                                <div className="lcz-form__checking">
                                                    <div className="lcz-form__checking-spinner">
                                                    </div>
                                                </div>
                                                :
                                                <div>
                                                    {

                                                    }
                                                    {resultSubmit['success'] === null
                                                        ?
                                                        <div>
                                                            <div className="button-generate-pc">Generate link</div>
                                                            <div className="button-generate-mobile">Share link</div>
                                                        </div>
                                                        : !resultSubmit['success']
                                                            && <div>Oops, please try again</div>
                                                    }
                                                </div>
                                        }
                                    </Button>
                                </div>
                            </section>
                        </Form>
                    )}
                </Formik>
            </SubmitContext.Provider>
            <div>
                {
                    resultSubmit['success'] &&
                        <ShareBlock url={resultSubmit.data.link} emailValidating={resultValidate}/>
                }
            </div>
        </>
    );
};

ReferralForm.propTypes = {
    data: PropTypes.object,
};

function mapKeys(obj, mapFn) {
    const result = {};
    Object.entries(obj).forEach(([key, value]) => {
        result[key] = mapFn(value, key);
    });
    return result;
}
