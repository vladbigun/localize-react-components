import React from 'react';
import classes from './SimpleFooter.module.scss';
import {Link} from "react-router-dom";

const SimpleFooter = () => {
  return (
    <footer>
      <div className={classes.join_waitlist}>
        <div className={classes.join_waitlist_text}>
          <span className={classes.join_waitlist_text_title}>
            We’re expanding.
            <br />
            Join the waitlist.
          </span>
          <div className={classes.btn_container}>
            <Link className={classes.join_waitlist_btn} to="/agents/waitlist/?type=rentals">
              Rentals
            </Link>
            <Link className={classes.join_waitlist_btn} to="/agents/waitlist/?type=cities">
              New cities
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
