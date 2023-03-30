import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Collapsible.scss';

export const Collapsible = ({ children, className, duration = 125 }) => {
    const [phase, setPhase] = useState(children ? 'entered' : 'left');
    const [height, setHeight] = useState('auto');
    const [lastChildren, setLastChildren] = useState(children);
    const [prevChildren, setPrevChildren] = useState();
    const contentEl = useRef(null);

    useEffect(() => {
        if (!children && prevChildren) {
            setPhase('before-leave');
            requestAnimationFrame(() => {
                setPhase('leave');
            });
        }
        if (children) {
            setLastChildren(children);
            if (!prevChildren) {
                setPhase('before-enter');
                requestAnimationFrame(() => {
                    setPhase('enter');
                });
            }
        }

        setPrevChildren(children);
    }, [Boolean(children)]);

    useEffect(() => {
        const { current } = contentEl;
        if (current == null) {
            return;
        }

        switch (phase) {
            case 'before-enter':
                setHeight('0');
                break;
            case 'enter':
                setHeight(`${current.offsetHeight}px`);
                break;
            case 'entered':
                setHeight('auto');
                break;
            case 'before-leave':
                setHeight(`${current.offsetHeight}px`);
                break;
            case 'leave':
            case 'left':
                setHeight('0');
                break;
        }
    }, [phase]);

    const onTransitionEnd = useCallback(() => {
        setPhase(phase === 'enter' ? 'entered' : phase === 'leave' ? 'left' : phase);
    }, [phase]);

    const style = {
        opacity: ['enter', 'entered', 'before-leave'].includes(phase) ? 1 : 0,
        transitionDuration: `${duration}ms`,
        height,
    };

    return (
        <div className={cx(className, 'lcz-collapsible')} style={style} onTransitionEnd={onTransitionEnd}>
            <div className="lcz-collapsible__content" ref={contentEl}>
                {children || lastChildren}
            </div>
        </div>
    );
};

Collapsible.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    duration: PropTypes.number,
};
