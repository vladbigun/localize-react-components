import React, {useContext} from 'react';
import classes from './SimpleHeader.module.scss';
import clsx from 'clsx';
import {AssetsContext} from "../../context/AssetsContext";

const SimpleHeader = (props) => {
    // eslint-disable-next-line react/prop-types
    const {assets} = useContext(AssetsContext);
  // eslint-disable-next-line react/prop-types
    const {image, children} = props;
  return (
    <>
        {
            /*
            <div className={classes.header_title}>
                <div className={classes.header_title_text}>
                    <a href="/">
                        <img className="lcz-logo-img" src={assets + '/images/logo.svg'} alt=""/>
                    </a>
                </div>
            </div>
            */
        }
      <div className={classes.singup_header_section}>
        <div className={classes.signup_header_container}>
          <div className={classes.steps_form_title_text}>
            {
              children
            }
          </div>
        </div>
        <img
          className={clsx(classes.steps_form_img, classes.steps_form_img_pc)}
          src={assets + image}
          alt=""
        />
        {/* <img className="steps-form-img steps-form-img-mobile" src="<?= get_template_directory_uri()?>/img/bridge-mobile.svg" alt="" />
                <div className="steps-form-img-bottom"></div> */}
      </div>
    </>
  );
};

export default SimpleHeader;
