import React, {useState} from 'react';
import {SignUpStepTwo} from "./SignupStepTwo/SignUpStepTwo";
import {SignUpStepOne} from "./SignupStepOne/SignUpStepOne";
import {AssetsContext} from "../../context/AssetsContext";
import './SignUp.scss';

export const SignUp = () => {
    const queryParams = new URLSearchParams(window.location.search);
    // eslint-disable-next-line no-unused-vars
    const menuDefault = [{'title': 'Menu Default', 'url' : 'https://localize.city'},{'title': 'Test', 'url' : 'https://localize.city'}]

    const localItems = window.__DATA_REACT_LCZ__;
    const [items] = useState({
        brokerageNameOptions: localItems?.brokerageNameOptions || [],
        whoWorkingOptions: localItems?.whoWorkingOptions || [],
        activeBrokerageField: localItems.activeReferral,
        menu: localItems?.menu || [],
        assets: localItems?.assets || '/assets',
    })
    /*
    useEffect(async () => {
        if(!items.brokerageNameOptions.length || !items.whoWorkingOptions.length){
            let response = await ItemsSignupForm.getItems()
            setItems(response.data)
        }
    }, [])
    */
    return (
        <AssetsContext.Provider value={items}>
            {
                queryParams.get('step') === "2"
                    ?
                    <SignUpStepTwo idForm={queryParams.get('idForm')}/>
                    :
                    <SignUpStepOne idForm={queryParams.get('idForm')}/>
            }
        </AssetsContext.Provider>
    );
};
