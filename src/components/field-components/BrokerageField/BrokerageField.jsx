import React, {useCallback} from 'react';
import {SearchDropdownField} from "../SearchDropdownField";
import {createFieldValidator} from "../../../utils/create-field-validator";
import * as Yup from 'yup';

const defaultItems = [
    { value: '212 Consulting Corp', label: '212 Consulting Corp' },
    { value: '4 Corners Realty', label: '4 Corners Realty' },
    { value: 'A & I Broadway Realty', label: 'A & I Broadway Realty' },
    { value: 'A J Clarke Real Estate Corp', label: 'A J Clarke Real Estate Corp' },
    { value: 'A K N Y Real Estate', label: 'A K N Y Real Estate' },
    { value: 'A P Realty Group Ny', label: 'A P Realty Group Ny' },
    { value: 'Other', label: 'Other' },
];

const defaultLabel = 'Brokerage';
const defaultPlaceholder = 'Type your Brokerage';

export const BrokerageField = ({...props}) => {
    const { label = defaultLabel, placeholder = defaultPlaceholder, ...rest } = props;
    const items = props?.items.length ? props.items : defaultItems
    const validate = useCallback(createFieldValidator(Yup
        .string()
        .required('This is a required field')
    ), []);

    return (
        <SearchDropdownField {...{ ...rest, label, placeholder, items, validate }} />
    );
};

const { id, name, label, placeholder, items} = SearchDropdownField.propTypes;
BrokerageField.propTypes = {
    id,
    name,
    label,
    placeholder,
    items
};
