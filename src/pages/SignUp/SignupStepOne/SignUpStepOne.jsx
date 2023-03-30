import React, {useContext} from 'react';
import {Header} from "../../../components/Header/Header";
import SimpleHeader from "../../../components/SimpleHeader/SimpleHeader";
import SocialFooter from "../../../components/SocialFooter/SocialFooter";
import {AssetsContext} from "../../../context/AssetsContext";
import {SignupForm} from "../../../components";

export const SignUpStepOne = () => {
    const {activeBrokerageField} = useContext(AssetsContext);
    return (
        <>
            <Header/>
            <SimpleHeader image='/images/signup/bridge.svg'>
                {
                    activeBrokerageField ?
                        <h1>
                            We do the legwork. <br /> You make the sale.
                        </h1>
                        :
                        <h1>
                            Join us and <br /> never lose another deal!
                        </h1>
                }
            </SimpleHeader>
            <section className="container-signup">
                <SignupForm/>
            </section>
            {
                !activeBrokerageField && <SocialFooter/>
            }
        </>
    );
};
