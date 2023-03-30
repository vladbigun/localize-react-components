import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { Input } from '../Input';
import { createFieldValidator } from '../../../utils/create-field-validator';

const defaultLabel = 'Full name';
const defaultPlaceholder = 'Joann Smith';

export const FullNameField = (props) => {
    const { label = defaultLabel, placeholder = defaultPlaceholder, ...rest } = props;
    const validate = useCallback(createFieldValidator(Yup
        .string()
        .min(2, 'Minimum 2 characters')
        .max(30, 'Maximum 30 characters')
        .required('This is a required field')
        .test(
            'full name',
            'Enter your full name, separated by spaces',
            (value) => value.split(' ').length > 1 && value.split(' ').length <= 3
        )
    ), []);

    return (
        <Input type="text" {...rest} {...{ label, placeholder, validate}} />
    );
};

const { id, name, label, placeholder, autoFocus, onHoverChange } = Input.propTypes;
FullNameField.propTypes = {
    id,
    name,
    label,
    placeholder,
    autoFocus,
    onHoverChange,
};
