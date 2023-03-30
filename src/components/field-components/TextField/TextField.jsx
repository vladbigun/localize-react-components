import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input';
import { createFieldValidator } from '../../../utils/create-field-validator';

export const TextField = ({ validate: extValidate, ...props }) => {
    const validate = useMemo(() => createFieldValidator(extValidate), []);

    return (
        <Input type="text" {...{ ...props, validate }} />
    );
};

const { id, name, label, autoFocus, placeholder, onHoverChange } = Input.propTypes;
TextField.propTypes = {
    id,
    name,
    label,
    autoFocus,
    placeholder,
    onHoverChange,
    validate: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ]),
};
