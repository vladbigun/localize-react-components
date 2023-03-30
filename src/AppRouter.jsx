import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom';
import {WaitList} from "./pages/WaitLIst/WaitList";
import {Referral} from "./pages/Referral/Referral";
import {SignUp} from "./pages/SignUp/SignUp";

const ScrollToTop = () => {
    let location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return null;
}

const AppRouter = (items) => {
    console.log(items)
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Switch>
                <Route exact path="/agents/signup" component={SignUp}/>
                <Route exact path="/agents/waitlist" component={WaitList}/>
                <Route exact path="/agents/referral" component={Referral}/>
                {
                    /*
                    <Route exact path="/agents/about-us" component={AboutUs}/>
                    <Route>
                        <Redirect to={'/signup'}/>
                    </Route>
                     */
                }
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;
