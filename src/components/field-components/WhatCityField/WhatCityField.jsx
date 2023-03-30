import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { Input } from '../Input';
import { createFieldValidator } from '../../../utils/create-field-validator';

const defaultLabel = 'In what city do you work?';
const defaultPlaceholder = 'Chicago';

export const WhatCityField = (props) => {
    const { label = defaultLabel, placeholder = defaultPlaceholder, ...rest } = props;
    const validate = useCallback(createFieldValidator(Yup
        .string()
        .min(2, 'Minimum 2 characters')
        .max(30, 'Maximum 30 characters')
        .required('This is a required field')
    ), []);

    return (
        <Input type="text" {...rest} {...{ label, placeholder, validate}} />
    );
};

const { id, name, label, placeholder, autoFocus, onHoverChange } = Input.propTypes;
WhatCityField.propTypes = {
    id,
    name,
    label,
    placeholder,
    autoFocus,
    onHoverChange,
};
