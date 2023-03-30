import React, {useContext, useState} from 'react';
import './Header.scss';
import cx from "classnames";
import {AssetsContext} from "../../context/AssetsContext";

// eslint-disable-next-line react/prop-types
export const Header = ({title}) => {
    const {assets, menu} = useContext(AssetsContext);
    const [activeMenu, setActiveMenu] = useState(false);

    const classNameMenu = cx(
        'lcz-menu-bg',
        { 'lcz-menu-active': activeMenu }
    );

    return (
        <>
            <div className="lcz-header-container">
                <div className="lcz-logo-wrapper">
                    <a href="/">
                        <img className="lcz-logo-img" src={assets + '/images/logo.svg'} alt=""/>
                    </a>
                    {   title &&
                        <div className="lcz-logo-title">{title}</div>
                    }
                </div>
                {/*
                    <div className="lcz-сhristmas-toys">
                        <img src={assets + '/img/сhristmas-toys.svg'} alt=""/>
                    </div>
                 */
                }
                {
                    menu.length > 0 &&
                    <div className="lcz-menu-container">
                        <div>
                            <div className="lcz-menu">
                                <ul>
                                    {
                                        menu.map((item) => (
                                            <>
                                                <li>
                                                    <a href={item.url}>{item.title}</a>
                                                </li>
                                            </>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="lcz-menu-mobile-btn" onClick={() => {setActiveMenu(true); document.body.style.overflow = "hidden";}}>
                            <img src={assets + '/img/menu.svg'} alt=""/>
                        </div>
                        <div className={classNameMenu}>
                            <div className="lcz-menu-mobile">
                                <div className="lcz-logo-wrapper">
                                    <img className="lcz-logo-img" src={assets + '/img/logo.svg'} alt=""/>
                                    <div className="lcz-menu-mobile-close-btn" onClick={() => {setActiveMenu(false); document.body.style.overflow = "auto";}}>
                                        <img src={assets + '/img/menu-close.svg'} alt=""/>
                                    </div>
                                </div>
                                <div className="lcz-menu-mobile-wrapper">
                                    <ul>
                                        {
                                            menu.map((item) => (
                                                <>
                                                    <li>
                                                        <a href={item.url}>{item.title}</a>
                                                    </li>
                                                </>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </div>
        </>
    )
};
