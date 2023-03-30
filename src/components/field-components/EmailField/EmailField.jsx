import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { Input } from '../Input';
import { createFieldValidator } from '../../../utils/create-field-validator';
import PropTypes from 'prop-types';

import './EmailField.scss';

const defaultLabel = 'Email';
const defaultPlaceholder = 'joann.smith@realestate.com';

export const EmailField = (props) => {
    const { label = defaultLabel, placeholder = defaultPlaceholder, ...rest } = props;
    const validate = useCallback(createFieldValidator(Yup
        .string()
        .email('Invalid email format')
        .required('Required!')
    ), []);

    const postValidate = useCallback(async (value, setError) => {
        const result = props.validate ? await props.validate(value) : null;
        if (result != null) {
            setError('Email already taken');

            return (
                <div className="lcz-email-field__add-info">
                    {/*<div className="lcz-email-field__add-info-email">{value}</div>*/}
                    <div className="lcz-email-field__add-info-message1">This email already has an account.</div>
                    <div className="lcz-email-field__add-info-message2">Check your email for sign in link.</div>
                </div>
            );
        }

        return null;
    }, [props.validate]);

    return (
        <Input type="email" {...{ ...rest, validate, postValidate, label, placeholder }} />
    );
};

const { id, name, label, onHoverChange, autoFocus, placeholder } = Input.propTypes;
EmailField.propTypes = {
    id,
    name,
    label,
    onHoverChange,
    autoFocus,
    placeholder,
    validate: PropTypes.func,
};
