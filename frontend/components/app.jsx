// React
import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Route, Switch } from 'react-router-dom'

// Components
import GreetingContainer from './home/greeting_container'
import SignupFormContainer from './forms/signup_form_container'
import LoginFormContainer from './forms/login_form_container'
import StoryIndexContainer from './stories/story_index_container'
import StoryShowContainer from './stories/story_show_container'
import UserDropdown from './home/placeholder_user_dropdown'
import StoryFormContainer from './stories/story_form_container'
import DashboardContainer from './dashboard/dashboard_container'

import Logo from './home/logo'



const App = () => (
    <div className={"app-body"}>
        <header className={"nav-bar"}>
            <Logo />
            <div className={"nav-user"}>
                <UserDropdown />
                <GreetingContainer />
            </div>

        </header>

        <div className={"story-body"}>
            <ProtectedRoute exact path={'/index'} component={StoryIndexContainer} />

            <Switch>
                
                <AuthRoute exact path={'/signup'} exact={true} component={SignupFormContainer} />
                <AuthRoute exact path={'/login'} exact={true} component={LoginFormContainer} />


                <ProtectedRoute exact path={`/stories/:storyId`} component={StoryShowContainer} />
                <ProtectedRoute exact path={'/new'} component={StoryFormContainer} />

            </Switch>

        </div>

    </div>
)


export default App