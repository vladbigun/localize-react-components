import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import {useField} from 'formik';
import {FormGroup} from '../FormGroup';
import {simpleOverride} from './react-select-helpers';
import './SearchDropdownField.scss';
import { Select } from "react-select-virtualized";

// react-select component overrides
const ClearIndicator = () => null;
const IndicatorSeparator = () => null;
const Control = simpleOverride('lcz-dropdown', ({selectProps: {success, hasError}}) => ({
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
    ({selectProps: {success, hasError}}) => ({
        children: null,
        className: cx(
            'lcz-dropdown__dropdown-indicator',
            {'lcz-dropdown__dropdown-indicator--hide': success || hasError}
        )
    })
);

DropdownIndicator.propTypes = {
    innerRef: PropTypes.any,
    innerProps: PropTypes.any,
};

const Menu = simpleOverride('lcz-dropdown__menu');
const MenuList = simpleOverride('lcz-dropdown__menu-list');
const Option = simpleOverride('lcz-dropdown__option', ({props: {isFocused}}) => ({
    className: cx(
        'lcz-dropdown__option',
        {'lcz-dropdown__option--focus': isFocused}
    )
}));

export const SearchDropdownField = ({label, items, validate, placeholder, ...props}) => {
    const {id, name} = props;
    const [
        {value, onBlur: onBlurFormik},
        {error, touched},
        {setValue, setTouched, setError}
    ] = useField(props);

    const sortItems = (elems) => {
        return elems.sort((a, b) => b.num - a.num)
    }
    const filterAllOptions = (rawInput) => {
        let inputSplit = rawInput.toLowerCase().split(' ');
        if(rawInput.length > 0) {
            let arraySearch = [];
            items.map((item) => {
                let count = 0;
                let status = false;
                if(item.value === 'Other') {
                    status = true;
                }
                else{
                    inputSplit.map((inputItem) => {
                        if(inputItem !== '' && item.value.toLowerCase().includes(inputItem)) {
                            status = true;
                            count++;
                        }
                    })
                }
                if(status){
                    item.num = count;
                    arraySearch.push(item);
                }
            })
            setOptions(sortItems(arraySearch));
        } else{
            setOptions(items);
        }
    }

    const [options, setOptions] = useState(items)

    const innerValue = useMemo(() => items.find((it) => it.value === value), [items, value]);

    const onBlur = useCallback((...args) => {
        onBlurFormik(...args);
    }, []);

    const onChange = useCallback((newValue) => {
        let val = newValue !== null ? newValue.value : undefined
        setValue(val);
        setTouched(true);
        validate(val).then(i => {
            setError(i);
        })
    }, [setValue, setTouched]);

    const onMenuClose = useCallback(() => {
        setTouched(true);
    }, [setTouched]);


    const success = touched && error == null;
    const hasError = touched && error != null;

    return (

        <FormGroup error={touched ? error : null} {...{id, name, label}} >
            <Select
                styles={{
                    placeholder: () => ({
                        color: "#ECECEC",
                        position: "absolute"
                    }),
                }}
                formatOptionLabel={
                    (option) => (
                        <div className="lcz-label" >{option.label}</div>
                    )
                }
                optionHeight={56}
                placeholder={placeholder}
                options={options}
                value={innerValue}
                openMenuOnClick={true}
                isSearchable={true}
                openMenuOnFocus={true}
                blurInputOnSelect={true}
                tabSelectsValue={false}
                captureMenuScroll={false}
                filterOption={() => true}
                onInputChange={(e) => filterAllOptions(e)}
                isClearable={true}
                //menuIsOpen={true}
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
                onChange={onChange}
                onBlur={onBlur}
                onMenuClose={onMenuClose}
                success={success}
                hasError={hasError}
            />

        </FormGroup>
    );
};

SearchDropdownField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }),
    ),
    otherItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }),
    ),
    validate: PropTypes.func
};
