import React from 'react';
import {RadioButtonField} from "../RadioButtonField";

const defaultItems =  [
    { value: 'just-me', label: 'Just me' },
    { value: 'my-team', label: 'My team' },
    { value: 'my-entire-brokerage', label: 'My entire brokerage' }
];




const defaultLabel = 'Who will be working with Localize?';

export const WhoWorkingField = ({...props}) => {
    const { label = defaultLabel, ...rest } = props;
    const items = props?.items.length ? props.items : defaultItems
    const validate = () => undefined;
    return (
        <RadioButtonField {...{ ...rest, label, items, type: "radio", validate }} />
    );
};

const { id, name, label, items } = RadioButtonField.propTypes;
WhoWorkingField.propTypes = {
    id,
    name,
    label,
    items
};
