import React, {useState} from 'react';

import './Referral.scss';
import {ReferralForm} from "../../components/ReferralForm/ReferralForm";
import Snow from "../../components/Snow/Snow";
import {Header} from "../../components/Header/Header";
import {AssetsContext} from "../../context/AssetsContext";

export const Referral = () => {
    const localItems = window.__DATA_REACT_LCZ__;
    const [items] = useState({
        menu: localItems?.menu || [],
        assets: localItems?.assets || '/assets',
    })
    return (
        <AssetsContext.Provider value={items}>
            <div className="lcz-referral-bg" style={{'backgroundImage': 'url(' + items.assets + '/images/referral/bg.png)'}}>
                <Header title={'Referral program'}/>
                <div className="lcz-referral-wrapper">
                    <Snow assets={items.assets}/>
                    <section className="lcz-referral-container">
                        <div className="lcz-cookies-mobile">
                            <img src={items.assets + '/images/referral/Cookies-mobile.svg'} alt=""/>
                        </div>
                        <div className="lcz-title">
                            <span>Refer an agent and get rewarded</span>
                        </div>
                        <div className="lcz-wrapper">
                            <div>
                                <div className="lcz-text">
                                    <p>Localize is a lead conversion solution that nurtures raw leads into qualified homebuyers so agents never lose another deal.</p>
                                    <p>Fill in the following details to generate your unique link, spread the word and get a $100 Amazon gift card, once your referral uploads 100 leads.</p>
                                </div>
                                <ReferralForm/>
                            </div>
                            <div className="lcz-cookies">
                                <img src={items.assets +'/images/referral/Cookies.svg'} alt=""/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </AssetsContext.Provider>
    );
};
