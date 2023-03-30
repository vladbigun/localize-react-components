import React, { useCallback, useMemo, useState } from 'react';
import { Input } from '../Input';
import { createFieldValidator } from '../../../utils/create-field-validator';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import './DomainField.scss';

const defaultLabel = 'Choose your custom domain';
const defaultPlaceholder = 'davis-jones';

const notUniqueError = Symbol('not unique domain error');

export const DomainField = (props) => {
    const { label = defaultLabel, placeholder = defaultPlaceholder, validate: externalValidate, ...rest } = props;
    const [{ value }, { error }] = useField(props.name);
    const [validated, setValidated] = useState(false);
    const validate = useMemo(() => createFieldValidator(Yup
        .string()
        .min(3, 'Minimum 3 characters')
        .max(30, 'Maximum 30 characters')
        .required('This is a required field')
        .matches(/^[a-z0-9-]+$/, 'Only lowercase letters, numbers or hyphen')
    ), []);

    const postValidate = useCallback(async (value, setError) => {
        const result = await externalValidate(value);
        if (result) {
            setError(notUniqueError);
        }
        setValidated(true);
        return result ? true : null;
    }, []);

    const info = validated && (!error || error === notUniqueError) && (
        <div className="lcz-domain-field__info">
            <div className="lcz-domain-field__info-url">
                <span className="lcz-domain-field__info-domain">{value}</span>.localize.city
            </div>
            {error === notUniqueError && <div className="lcz-domain-field__info-fail">is unavailable</div>}
            {!error && <div className="lcz-domain-field__info-success">is available</div>}
            {error === notUniqueError && <div className="lcz-domain-field__info-instruction">try adding number</div>}
        </div>
    ) || undefined;

    return (
        <Input type="text" className="lcz-domain-field" {...{
            ...rest,
            validate,
            postValidate,
            label,
            placeholder,
            info,
        }}/>
    );
};

const { id, name, label, placeholder, autoFocus, onHoverChange } = Input.propTypes;
DomainField.propTypes = {
    id,
    name,
    label,
    placeholder,
    autoFocus,
    onHoverChange,
    validate: PropTypes.func,
};
