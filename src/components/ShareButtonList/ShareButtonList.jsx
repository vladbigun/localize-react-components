import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import './ShareButtonList.scss';
import {
    EmailShareButton,
    FacebookMessengerShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton
} from "react-share";
import {AssetsContext} from "../../context/AssetsContext";

export const ShareButtonList = ({link}) => {
    const {assets} = useContext(AssetsContext);
    return (
        <div className="lcz-share-container">
            <p>Share your link with friends, agents & brokers!</p>
            <div className="lcz-share-list">
                <div className="lcz-share-item">
                    <EmailShareButton url={link}>
                        <img src={assets + "/images/email.svg"} alt=""/>
                    </EmailShareButton>
                </div>
                <div className="lcz-share-item">
                    <LinkedinShareButton url={link}>
                        <img src={assets + "/images/linkedin.svg"} alt=""/>
                    </LinkedinShareButton>
                </div>
                <div className="lcz-share-item">
                    <FacebookShareButton url={link}>
                        <img src={assets + "/images/facebook.svg"} alt=""/>
                    </FacebookShareButton>
                </div>
                <div className="lcz-share-item">
                    <FacebookMessengerShareButton url={link}>
                        <img src={assets + "/images/messenger.svg"} alt=""/>
                    </FacebookMessengerShareButton>
                </div>
                <div className="lcz-share-item">
                    <TwitterShareButton url={link}>
                        <img src={assets + "/images/twitter.svg"} alt=""/>
                    </TwitterShareButton>
                </div>
            </div>
        </div>
    );
};

ShareButtonList.propTypes = {
    link: PropTypes.string,
};
