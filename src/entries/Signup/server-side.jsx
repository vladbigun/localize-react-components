import React from 'react';
import ReactDOMServer from 'react-dom/server';
import AppRouter from "../../AppRouter";

// eslint-disable-next-line no-undef
const json = process.argv[2] || '{}';
const __SIGNUP_FORM_DATA__ = JSON.parse(json);

async function main() {
    return ReactDOMServer.renderToString(<AppRouter data={__SIGNUP_FORM_DATA__}/>);
}

main().then((filePath) => {
    console.log(filePath);
});
