import React from 'react';
import './LinkField.scss';
import {Button} from "../../Button/Button";
import PropTypes from "prop-types";

export const LinkField = (props) => {
    let { value } = props;
    // eslint-disable-next-line react/prop-types
    const valueNoHttp = value.replace(/(^\w+:|^)\/\//, '');
    const CopyLink = (e) => {
        navigator.clipboard.writeText(value)
            .then(() => {
                e.target.innerText = 'Link copied';
                e.target.style = "background: #01798A";
            })
            .catch(err => {
                e.target.innerText = err;
            });
    }
    const ShareLink = () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: value
            }).catch(console.error);
        } else {
            console.log('Web Share API not supported!');
        }
    }

    return (
        <div className="lcz-link-field__wrapper">
            <div className="lcz-container-pc">
                <input className="lcz-input" type="text" value={valueNoHttp}/>
                <Button onClick={(e) => CopyLink(e)}>Copy</Button>
            </div>
            <div className="lcz-container-mobile">
                <Button onClick={() => ShareLink()}>Share link</Button>
            </div>
        </div>
    );
};
LinkField.propTypes = {
    value: PropTypes.string,
};
