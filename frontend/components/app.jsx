import React from "react";
import { AuthRoute } from '../util/route_util'
import SignupFormContainer from './forms/signup_form_container'
import LoginFormContainer from './forms/login_form_container'

const App = () => (
    <div>
        <h1>Testing</h1>


        <AuthRoute path={'/signup'} exact={true} component={SignupFormContainer} />
        <AuthRoute path={'/login'} exact={true} component={LoginFormContainer} />
    </div>
)


export default App