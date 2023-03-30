// noinspection JSUnresolvedVariable

import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from "../../pages/AboutUs/AboutUs";

const root = document.querySelector('#about-us');

let data;
try {
// eslint-disable-next-line no-undef
    data = JSON.parse(__SIGNUP_FORM_DATA__ ?? '{}');
}
catch (error) {
    data = {};
}

ReactDOM.hydrate(<AboutUs data={data}/>, root);
