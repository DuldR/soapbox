import React from "react";
import { AuthRoute } from '../util/route_util'
import GreetingContainer from './home/greeting_container'
import SignupFormContainer from './forms/signup_form_container'
import LoginFormContainer from './forms/login_form_container'

import StoryIndexContainer from './stories/story_index_container'

import { Route } from 'react-router-dom'

const App = () => (
    <div>
        <section className="landing-info">
            <GreetingContainer />
        </section>

        <section>
            <AuthRoute path={'/signup'} exact={true} component={SignupFormContainer} />
            <AuthRoute path={'/login'} exact={true} component={LoginFormContainer} />
        </section>

        <section className={"main-index"}>
            {/* MNeed to protect this route */}
            <Route exact path={'/'} component={StoryIndexContainer} />

        </section>

    </div>
)


export default App