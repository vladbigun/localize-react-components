import React from 'react';
import PropTypes from 'prop-types';

export const simpleOverride = (className, propsFn) => {
    const Component = ({ innerRef, innerProps = {}, selectProps, children, ...props }) => {
        const additionalProps = propsFn ? propsFn({ selectProps, innerProps, props }) : {};
        return (
            <div className={className} ref={innerRef} {...innerProps} {...additionalProps}>
                {children}
            </div>
        );
    };
    Component.propTypes = {
        innerRef: PropTypes.any,
        innerProps: PropTypes.any,
        children: PropTypes.node,
        selectProps: PropTypes.any,
    };

    return Component;
};
