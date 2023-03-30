import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { FullNameField } from '../field-components/FullNameField';
import { EmailField } from '../field-components/EmailField';
import { PhoneField } from '../field-components/PhoneField';
import { BrokerageField } from '../field-components/BrokerageField';
import { WhoWorkingField } from '../field-components/WhoWorkingField';
import { Button } from '../Button/Button';
import {submitWaitlistForm} from '../../api/submitSignupForm';
import { noop } from '../../utils/noop';

import './WaitLIstForm.scss';
import ItemsSignupForm from "../../api/ItemsSignupForm";
import {WhatCityField} from "../field-components/WhatCityField";
import {SubmitContext} from "../../context/SubmitContext";



const defaultInitialValues = {
    full_name: '',
    email: '',
    phone_number: '',
    brokerage_name: '',
    who_working: '',
    what_city: '',
};

// eslint-disable-next-line react/prop-types
export const WaitListForm = (data) => {
    const {type} = data;
    const initialValues = {
        ...defaultInitialValues
    }
    const localItems = window.__SIGNUP_FORM_DATA__
    const [items, setItems] = useState({
        brokerageNameOptions: localItems?.brokerageNameOptions || [],
        whoWorkingOptions: localItems?.whoWorkingOptions || []
    })
    useEffect(async () => {
        if(!items.brokerageNameOptions.length || !items.whoWorkingOptions.length){
            let response = await ItemsSignupForm.getItems()
            setItems(response.data)
        }
    }, [])

    const onSubmit = async (values) => {
        const submitValues = {
            ...values,
            'type': type,
        }
        const result = await submitWaitlistForm(submitValues);
        if (result.redirect) {
            window.location.href = result.redirect;
            // Do not set submitting to false here to prevent button blinking before redirect happens
            return new Promise(noop);
        }
    };

    const initialErrors = (value, key) => {
        if(key === 'brokerage_name') return 'This is a required field';
        else return 'error'
    }

    const formikOptions = {
        initialValues,
        onSubmit,
        validateOnChange: false,
        validateOnBlur: false,
        initialErrors: mapKeys(initialValues, (value, key) => initialErrors(value, key)),
    };
    const [resultSubmit, setResultSubmit] = useState({'success' : null});
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
                                <section className="lcz-form__section">
                                    <FullNameField name="full_name"/>
                                    <EmailField name="email"/>
                                    <PhoneField name="phone_number"/>
                                    <BrokerageField name="brokerage_name" items={items.brokerageNameOptions}/>
                                    <WhoWorkingField name="who_working" items={items.whoWorkingOptions}/>
                                    <WhatCityField name="what_city"/>
                                </section>
                                <section className="lcz-form__section lcz-form__submit-section">
                                    <div className="lcz-form__checking">
                                    </div>
                                    <p className="lcz-form__submit-row">
                                        <Button submit disabled={isSubmitting || !isValid || !dirty}>Continue</Button>
                                    </p>
                                </section>

                            </Form>
                )}
            </Formik>
        </SubmitContext.Provider>
    );
};

WaitListForm.propTypes = {
    data: PropTypes.object,
};

function mapKeys(obj, mapFn) {
    const result = {};
    Object.entries(obj).forEach(([key, value]) => {
        result[key] = mapFn(value, key);
    });
    return result;
}
