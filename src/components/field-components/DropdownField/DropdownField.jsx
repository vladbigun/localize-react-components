import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import cx from 'classnames';
import { useField } from 'formik';
import { FormGroup } from '../FormGroup';
import { simpleOverride } from './react-select-helpers';

import './DropdownField.scss';

// react-select component overrides
const ClearIndicator = () => null;
const IndicatorSeparator = () => null;
const Control = simpleOverride('lcz-dropdown', ({ selectProps: { success, hasError } }) => ({
    className: cx(
        'lcz-dropdown',
        {
            'lcz-dropdown--success': success,
            'lcz-dropdown--error': hasError
        },
    )
}));
const ValueContainer = simpleOverride('lcz-dropdown__value-container');
const SingleValue = simpleOverride('lcz-dropdown__single-value');
const IndicatorsContainer = simpleOverride('lcz-dropdown__indicators-container');
const DropdownIndicator = simpleOverride(
    'lcz-dropdown__dropdown-indicator',
    ({ selectProps: { success, hasError } }) => ({
        children: null,
        className: cx(
            'lcz-dropdown__dropdown-indicator',
            { 'lcz-dropdown__dropdown-indicator--hide': success || hasError }
        )
    })
);
DropdownIndicator.propTypes = {
    innerRef: PropTypes.any,
    innerProps: PropTypes.any,
};

const Menu = simpleOverride('lcz-dropdown__menu');
const MenuList = simpleOverride('lcz-dropdown__menu-list');
const Option = simpleOverride('lcz-dropdown__option', ({ props: { isFocused } }) => ({
    className: cx(
        'lcz-dropdown__option',
        { 'lcz-dropdown__option--focus': isFocused }
    )
}));

export const DropdownField = ({ label, items, validate, ...props }) => {
    const { id, name } = props;
    const [
        { value, onBlur: onBlurFormik },
        { error, touched },
        { setValue, setTouched, setError }
    ] = useField(props);

    const innerValue = useMemo(() => items.find((it) => it.value === value), [items, value]);

    const onBlur = useCallback((...args) => {
        onBlurFormik(...args);
        setError(validate(value));
    }, []);

    const onChange = useCallback((newValue) => {
        setValue(newValue.value);
        setTouched(true);
    }, [setValue, setTouched]);

    const onMenuClose = useCallback(() => {
        setTouched(true);
    }, [setTouched]);

    const filterOption = useCallback((item) => {
        return item.value !== value;
    }, [value]);

    const success = touched && error == null;
    const hasError = touched && error != null;

    return (
        <FormGroup error={touched ? error : null} {...{ id, name, label }} >
            <Select
                options={items}
                value={innerValue}
                openMenuOnClick={true}
                isSearchable={false}
                openMenuOnFocus={true}
                blurInputOnSelect={true}
                tabSelectsValue={false}
                components={{
                    ClearIndicator,
                    IndicatorSeparator,
                    Control,
                    ValueContainer,
                    SingleValue,
                    IndicatorsContainer,
                    DropdownIndicator,
                    Menu,
                    MenuList,
                    Option,
                }}
                {...{ onChange, onBlur, onMenuClose, success, hasError, filterOption }}
            />
        </FormGroup>
    );
};

DropdownField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }),
    ),
    validate: PropTypes.func,
};
