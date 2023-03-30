import React, { useCallback, useMemo } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { Input } from '../Input';
import { createFieldValidator } from '../../../utils/create-field-validator';

import './PhoneField.scss';

const defaultLabel = 'Phone';
const defaultPlaceholder = '(315) 345-3425';

const phoneUtil = PhoneNumberUtil.getInstance();

export const PhoneField = (props) => {
    const { label = defaultLabel, placeholder = defaultPlaceholder, ...rest } = props;
    const validate = useMemo(() => createFieldValidator(Yup
        .string()
        .test(
            'US phone',
            'Please use your 10-digit US phone number',
            (value) => phoneUtil.isValidNumberForRegion(phoneUtil.parse(value, 'US'), 'US')
        )
        .required('A phone number is required')
    ), []);

    const postValidate = useCallback(async (value, setError) => {
        const result = props.validate ? await props.validate(value) : null;
        if (result != null) {
            setError('Email already taken');

            return (
                <div className="lcz-phone-field__add-info">
                    {/*<div className="lcz-phone-field__add-info-email">{value}</div>*/}
                    <div className="lcz-phone-field__add-info-message1">This number already has an account.</div>
                    <div className="lcz-phone-field__add-info-message2">Check your email for sign in link.</div>
                </div>
            );
        }

        return null;
    }, [props.validate]);

    return (
        <Input type="tel" mask="(999) 999-9999" {...{ ...rest, validate, postValidate, label, placeholder }}/>
    );
};

const { id, name, label, placeholder, autoFocus, onHoverChange } = Input.propTypes;
PhoneField.propTypes = {
    id,
    name,
    label,
    placeholder,
    autoFocus,
    onHoverChange,
    validate: PropTypes.func,
};
