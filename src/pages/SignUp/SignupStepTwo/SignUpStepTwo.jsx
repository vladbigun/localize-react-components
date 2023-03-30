import React, {useContext, useState} from 'react';
import {Header} from "../../../components/Header/Header";
import {submitSignupFormStep2} from "../../../api/submitSignupForm";
import SimpleHeader from "../../../components/SimpleHeader/SimpleHeader";
import './SignUpStepTwo.scss';
import {Button} from "../../../components/Button/Button";
import cx from "classnames";
import {noop} from "../../../utils/noop";
import {NumberInput} from "../../../components/field-components/NumberInput/NumberInput";
import {AssetsContext} from "../../../context/AssetsContext";

export const SignUpStepTwo = (props) => {
    const {assets} = useContext(AssetsContext);
    const [paymentType, setPaymentType] = useState('every-six-months'); //every-month
    // eslint-disable-next-line no-unused-vars,react/prop-types
    const [numberOfAgents, setNumberOfAgents] = useState(1);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.target.innerText = "Loading...";
        // e.preventDefault();
        setLoading(true);
        // eslint-disable-next-line react/prop-types
        const result = await submitSignupFormStep2({'accepted': true, 'number_of_agents' : numberOfAgents, 'payment_type' : paymentType, 'id_form' : props.idForm});
        console.log(result)
        if (result.redirect) {
            window.location.href = result.redirect;
            // Do not set submitting to false here to prevent button blinking before redirect happens
            return new Promise(noop);
        }
        setLoading(false);
        e.target.innerText = "Accept";
    };

    const everySixMonthsClasses = cx(
        'lcz-item',
        {
            'lcz-item__active': paymentType === 'every-six-months',
        }
    );
    const everyMonthClasses = cx(
        'lcz-item',
        {
            'lcz-item__active': paymentType === 'every-month',
        }
    );
    const ChangeType = () => {
        if(document.documentElement.clientWidth < 900){
            if(paymentType === "every-six-months") setPaymentType('every-month')
            else if(paymentType === "every-month") setPaymentType('every-six-months')
        }
    }
    return (
        <>
            <Header/>
            <SimpleHeader>
                <h1>Choose your plan</h1>
                <span>A low monthly subscription enables each agent to access LocalizeHQ, including Hunter.</span>
            </SimpleHeader>
            <div className="lcz-signup-step-two-wrapper">
                <div className="lcz-step-items">
                    <div className="lcz-item-container">
                        <div className="lcz-item-header">
                            <span>Most popular</span>
                        </div>
                        <div className={everySixMonthsClasses}
                             onClick={() => setPaymentType('every-six-months')}>
                            <div className="lcz-text-wrapper">
                                <span>Pay for 6 months</span>
                            </div>
                            <div className="lcz-cost-wrapper">
                                <span>$</span>
                                <span className="lcz-cost">18</span>
                                <span>per user, per month</span>
                            </div>
                            <div className="lcz-step-form-group">
                                <NumberInput
                                    value={numberOfAgents}
                                    setValue={setNumberOfAgents}
                                    label={'Number of agents to enroll'}
                                />
                            </div>
                            <div className="lcz-cost-total">
                                <span>${numberOfAgents * 18 * 6} total</span>
                            </div>
                        </div>
                    </div>
                    <div className="lcz-item-or" onClick={() => ChangeType()}>
                        <span>or</span>
                        <img src={assets + '/images/Arrow.svg'} alt=""/>
                    </div>
                    <div className="lcz-item-container">
                        <div className="lcz-item-header">
                            <span>Text</span>
                        </div>
                        <div className={everyMonthClasses}
                             onClick={() => setPaymentType('every-month')}>
                            <div className="lcz-text-wrapper">
                                <span>Pay monthly</span>
                            </div>
                            <div className="lcz-cost-wrapper">
                                <span>$</span>
                                <span className="lcz-cost">20</span>
                                <span>per user, per month</span>
                            </div>
                            <div className="lcz-step-form-group">
                                <NumberInput
                                    value={numberOfAgents}
                                    setValue={setNumberOfAgents}
                                    label={'Number of agents to enroll'}
                                />
                            </div>
                            <div className="lcz-cost-total">
                                <span>${numberOfAgents * 20} total</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lcz-step-container">
                    <div className="lcz-step-terms">
                        <div className="lcz-terms-container">
                            <img src={assets + '/images/signup/flag.svg'} alt=""/>
                            <span>Localize also earns 30% of the agent’s commission if Hunter helps nurture a buyer who successfully closes on a home.</span>
                        </div>
                        <p>
                            By clicking Accept, you agree to our
                            <a target="_blank" href="https://localize.city/agents/localize-terms-conditions/" rel="noreferrer">
                                 Software as a Service Terms and Conditions
                            </a>
                            and
                            <a target="_blank" href="https://assets.localize.city/pages/privacy.html" rel="noreferrer">
                                 Privacy Policy.
                            </a>
                        </p>
                    </div>
                    <div className="lcz-step-button-container">
                        <Button onClick={(e) => onSubmit(e)} disabled={loading || !numberOfAgents}>Accept</Button>
                    </div>
                </div>
            </div>
        </>
    );
};
