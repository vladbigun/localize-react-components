// noinspection JSUnresolvedVariable

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "../../AppRouter";

const root = document.querySelector('#lcz-app');

let data;
try {
// eslint-disable-next-line no-undef
    data = JSON.parse(__SIGNUP_FORM_DATA__ ?? '{}');
}
catch (error) {
    data = {};
}

ReactDOM.hydrate(<AppRouter data={data}/>, root);
