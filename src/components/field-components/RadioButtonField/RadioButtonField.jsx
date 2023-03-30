import React, {useCallback, useEffect, useState} from 'react';

import './RadioButtonField.scss';
import PropTypes from "prop-types";
import {FormGroup} from "../FormGroup";
import {useField} from "formik";

export const RadioButtonField = ({label, items, validate, type, active, ...props}) => {
    const [
        {value},
        {error, touched},
        {setValue, setTouched, setError}
    ] = useField(props);

    useEffect(() => {
        if(!active) onChange("just-me");
        else setValue("");
    }, [active])

    const [validClass, setValidClass] = useState("lcz-radio-button--init");
    const onChange = useCallback((newValue) => {
        setValue(newValue);
        setTouched(true);
        setError(validate(value));
        setValidClass(validate ? "lcz-radio-button--success" : "lcz-radio-button--error");
    }, [setValue, setTouched]);
    const {id, name} = props;
    return (
        <>
            { active &&
            <FormGroup error={touched ? error : null} {...{id, name, label}} >

                <div className="lcz-radio-button__wrapper">
                    <div className={"lcz-radio-button__container " + validClass}>
                        {
                            items.map((item, index) =>
                                <div key={index}>
                                    <div className="lcz-radio-button__item">
                                        <input className="lcz-radio-button__item-input"
                                               type={type}
                                               value={item.value}
                                               name={name}
                                               checked={value === item.value}
                                               onChange={() => onChange(item.value)}
                                        />
                                        <div className="lcz-radio-button__item-title"
                                             onClick={() => onChange(item.value)}>{item.label}</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </FormGroup>
            }
        </>
    )
};

RadioButtonField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    active: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    mask: PropTypes.string,
    onHoverChange: PropTypes.func,
    autoFocus: PropTypes.bool,
    validate: PropTypes.func,
    postValidate: PropTypes.func,
    info: PropTypes.node,
    className: PropTypes.string,
    items: PropTypes.array,
    whoWorkingOptions: PropTypes.array
};
