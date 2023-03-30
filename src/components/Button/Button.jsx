import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.scss';


// eslint-disable-next-line react/prop-types
export const Button = ({ onClick, submit, inverted, disabled, children, loading, success }) => {
    const className = cx(
        'lcz-button',
        { 'lcz-button--inverted': inverted },
        { 'lcz-button--disabled': disabled },
        { 'lcz-button--disabled-loading': loading && disabled},
        { 'lcz-button--success' : success}
    );
    const type = submit ? 'submit' : 'button';
    return (
        <button {...{ onClick, className, type, disabled }}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    submit: PropTypes.bool,
    inverted: PropTypes.bool,
    disabled: PropTypes.bool,
};
