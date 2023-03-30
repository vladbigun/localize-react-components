import React from 'react';
import * as PropTypes from 'prop-types';
import cx from 'classnames';
import { Collapsible } from '../../Collapsible';

import './FormGroup.scss';

export const FormGroup = (props) => {
    const {
        label,
        children,
        id,
        name,
        error,
        info,
        className,
        hasFocus = false,
        isValidating = false
    } = props;

    return (
        <div className={cx('lcz-form-group', className)}>
            <label className="lcz-form-group__label" htmlFor={id || name}>
                {label}
            </label>
            {children}
            <Collapsible duration={125}>
                {error && <label className="lcz-form-group__error">{error}</label>}
            </Collapsible>
            <Collapsible className="lcz-form-group__info" duration={125}>
                {!hasFocus && !isValidating && info != null && (
                    <label className="lcz-form-group__info-label" htmlFor={id || name}>{info}</label>
                )}
            </Collapsible>
        </div>
    );
};

FormGroup.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node,
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.symbol,
    ]),
    info: PropTypes.node,
    className: PropTypes.string,
    hasFocus: PropTypes.bool,
    isValidating: PropTypes.bool,
};
