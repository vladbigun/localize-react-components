import React from 'react';

import Lottie from 'react-lottie';
import animationData from './snow_referral.json';
import './Snow.scss';

const Snow = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
  return (
      <div className="snow_referral">
        <Lottie options={defaultOptions}/>
      </div>
  );
};

export default Snow;
