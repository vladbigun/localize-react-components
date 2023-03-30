import React from 'react';
import { useField } from 'formik';

import './InputButton.scss';


export const InputButton = ({ ...props }) => {

    const { ...fieldProps } = props;
    const [field] = useField(fieldProps);
    const { value} = field;

    const copyTextField= (value) => {
        navigator.clipboard.writeText('https://' + value)
            .then(() => {
                console.log('ok');
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });
    }


    return (
        <div className="lcz-link-field__wrapper">
            <input type="text" value/>
            <div className="lcz-button__copy" onClick={() => copyTextField(value)}>Copy</div>
        </div>
    );
};

InputButton.propTypes = {

};
