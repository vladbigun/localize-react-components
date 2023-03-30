import React, {useContext} from 'react';
import classes from './SocialFooter.module.scss';
import {AssetsContext} from "../../context/AssetsContext";

const SocialFooter = () => {
    const {assets} = useContext(AssetsContext);
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer>
      <div className={classes.wrapper}>
          <div className={classes.container}>
              <a className={classes.copyright} href="/">© {year} Localize.city</a>
              <a href="https://www.facebook.com/LocalizeNYC/" target="_blank" className={classes.social} rel="noreferrer">
                  <img src={assets + '/images/facebook.svg'} alt=""/>
              </a>
              <a href="https://twitter.com/localizecity" target="_blank" className={classes.social} rel="noreferrer">
                  <img src={assets + '/images/twitter.svg'} alt=""/>
              </a>
              <a href="https://www.instagram.com/localize_city/?hl=en" target="_blank" className={classes.social} rel="noreferrer">
                  <img src={assets + '/images/instagram.svg'} alt=""/>
              </a>
              <a href="https://www.linkedin.com/company/localize-city" target="_blank" className={classes.social} rel="noreferrer">
                  <img src={assets + '/images/linkedin.svg'} alt=""/>
              </a>
          </div>
      </div>
    </footer>
  );
};

export default SocialFooter;
