import React from 'react';

import SimpleHeader from '../../components/SimpleHeader/SimpleHeader';

import './WaitList.scss';
import {WaitListForm} from "../../components/WaitListForm/WaitListForm";
import {AssetsContext} from "../../context/AssetsContext";
import {Header} from "../../components/Header/Header";



export const WaitList = () => {
    const window_assets = window.__get_template_directory_uri__;
    const assets_form = window_assets ? window_assets : '/assets';
    // eslint-disable-next-line no-unused-vars
    const menuDefault = [{'title': 'Menu Default', 'url' : 'https://localize.city'},{'title': 'Test', 'url' : 'https://localize.city'}]
    const menu = window.__menu__ ? window.__menu__ : [];

    const queryParams = new URLSearchParams(window.location.search);
    const type = queryParams.get('type');
    return (
        <>
            <AssetsContext.Provider value={{
                'assets': assets_form,
                'menu': menu
            }}
            >
                <Header/>
                <div className="lcz-waitlist-wrapper">
                    <SimpleHeader>
                        {
                            type === 'rentals'
                                ? <h1>Grow with us when we expand to rentals</h1>
                                : <h1>Grow with us when we expand to other cities</h1>
                        }
                    </SimpleHeader>
                </div>
                <section className="container">
                    <WaitListForm type={type}/>
                </section>
            </AssetsContext.Provider>
        </>
    );
};
