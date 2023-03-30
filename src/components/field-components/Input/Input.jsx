import React, {useCallback, useContext, useState} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import { isFunction, useField } from 'formik';
import { FormGroup } from '../FormGroup';
import { noop } from '../../../utils/noop';
import { Collapsible } from '../../Collapsible';
import debounce from 'lodash/debounce';

import './Input.scss';
import {SubmitContext} from "../../../context/SubmitContext";


export const Input = ({ label, mask, onHoverChange = noop, info, className, ...props }) => {

    const [isValidating, setIsValidating] = useState(false);
    const [lasValidatedValue, setLastValidatedValue] = useState();
    const [postValidationResult, setPostValidationResult] = useState();
    const [hasFocus, setHasFocus] = useState(false);

    const { id, name, type, placeholder, autoFocus } = props;
    // Do not pass validate to useField(). We'll use it internally to avoid running validation for all fields every time
    const { validate, postValidate, ...fieldProps } = props;
    const [field, { error, touched }, { setError, setTouched }] = useField(fieldProps);
    const { value, onBlur: fieldOnBlur} = field;

    const {resultSubmit, setResultSubmit} = useContext(SubmitContext);

    const validation = async (validate, value, postValidate, lasValidatedValue, error, setError) => {
        setHasFocus(false);
        setTouched(true);
        let result;
        if (isFunction(validate)) {
            try {
                result = await validate(value);
            }
            catch (error) {
                result = error?.message ?? String(error);
            }
        }
        if (result != null) {
            setPostValidationResult(null);
        } else if (isFunction(postValidate)) {
            if (lasValidatedValue === value) {
                result = error;
            } else {
                setIsValidating(true);
                setLastValidatedValue(value);
                setPostValidationResult(await postValidate(value, (err) => result = err));
                setIsValidating(false);
            }
        }
        setError(result);
    }
    const submitChange = () => {
        setResultSubmit({'success' : null});
    }
    const debounceValidation = useCallback(debounce(validation, 2000), [])
    const debounceSubmitChange = useCallback(debounce(submitChange, 2000), [])
    const onInput = useCallback((event) => {
        if(resultSubmit.success !== null) debounceSubmitChange();
        debounceValidation(validate, event.target.value, postValidate, lasValidatedValue, error, setError);
    }, [validate, value, postValidate, lasValidatedValue, error, setError])
    
    const onBlur = useCallback(async (...args) => {
        fieldOnBlur(...args);
        debounceValidation?.cancel();
        // Fire original onBlur to inform formik about this event
        // Note that we can't fire it at the end of async function since this causes an error!

        await validation(validate, value, postValidate, lasValidatedValue, error, setError);

    }, [validate, postValidate, setError, fieldOnBlur, value, lasValidatedValue, error]);

    const onMouseEnter = useCallback(() => onHoverChange(true), [onHoverChange]);
    const onMouseLeave = useCallback(() => onHoverChange(false), [onHoverChange]);
    const onFocus = useCallback(() => setHasFocus(true), []);

    const inputWrapperClasses = cx(
        'lcz-input__wrapper',
        {
            'lcz-input__wrapper--error': touched && !isValidating && (error != null || postValidationResult != null),
            'lcz-input__wrapper--success': touched && !isValidating && error == null && postValidationResult == null,
            'lcz-input__wrapper--validating': isValidating,
        }
    );

    const inputClasses = cx(
        'lcz-input',
        { 'lcz-input--error': touched && !isValidating && error != null && (postValidationResult == null || typeof postValidationResult === 'boolean') },
        { 'lcz-input--success': touched && !isValidating && error == null && postValidationResult == null },
        { 'lcz-input--non-unique': !isValidating && postValidationResult != null && typeof postValidationResult !== 'boolean' },
        { 'lcz-input--validating': isValidating },
    );

    return (
        <FormGroup error={!isValidating && touched && postValidationResult == null ? error : null}
                   {...{ label, id, name, info, className, hasFocus, isValidating }}
        >
            <span className="lcz-input__container">
                <span className={inputWrapperClasses}>
                    <InputMask className={inputClasses} disabled={isValidating}
                               {...field}
                               {...{
                                   id: name,
                                   type,
                                   placeholder,
                                   mask,
                                   onMouseEnter,
                                   onMouseLeave,
                                   autoFocus,
                                   onFocus,
                                   onBlur,
                                   onInput,
                               }}
                    />
                    <div className={cx('lcz-input__spinner', { 'lcz-input__spinner--show': isValidating })}/>
                </span>
                <Collapsible className="lcz-input__validation-result" duration={250}>
                    {(hasFocus || isValidating || typeof postValidationResult === 'boolean') ? null : postValidationResult}
                </Collapsible>
            </span>
        </FormGroup>
    );
};

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    mask: PropTypes.string,
    onHoverChange: PropTypes.func,
    autoFocus: PropTypes.bool,
    validate: PropTypes.func,
    postValidate: PropTypes.func,
    info: PropTypes.node,
    className: PropTypes.string,
};
