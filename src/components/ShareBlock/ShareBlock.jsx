import React from 'react';
import PropTypes from 'prop-types';
import './ShareBlock.scss';
import {LinkField} from "../field-components/LinkField";

import {ShareButtonList} from "../ShareButtonList/ShareButtonList";


export const ShareBlock = (props) => {
    // eslint-disable-next-line react/prop-types
    const { url, emailValidating } = props;
    return (
        <div className="lcz-share-block">
            <div className="lcz-share-wrapper">
                <LinkField value={url}/>
                <div className="lcz-pc-share">
                    <ShareButtonList link={url} />
                    {
                        emailValidating &&
                        <div className="lcz-link-HQ">
                            <a href="https://localizehq.com/">Go to LocalizeHQ</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

ShareBlock.propTypes = {
    url: PropTypes.string,
};
