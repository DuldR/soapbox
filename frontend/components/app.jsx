// React
import React from "react";
import { AuthRoute } from '../util/route_util'
import { Route, Switch } from 'react-router-dom'

// Components
import GreetingContainer from './home/greeting_container'
import SignupFormContainer from './forms/signup_form_container'
import LoginFormContainer from './forms/login_form_container'
import StoryIndexContainer from './stories/story_index_container'
import StoryShowContainer from './stories/story_show_container'
import UserDropdown from './home/placeholder_user_dropdown'
import StoryFormContainer from './stories/story_form_container'



const App = () => (
    <div>
        <header>
            <GreetingContainer />
            <UserDropdown />
        </header>

        <Switch>
            <AuthRoute exact path={'/signup'} exact={true} component={SignupFormContainer} />
            <AuthRoute exact path={'/login'} exact={true} component={LoginFormContainer} />
            <Route path="/stories/:storyId" component={StoryShowContainer} />
            {/* Probably needs to be protected route */}
            <Route exact path={'/'} component={StoryIndexContainer} />
            <Route exact path={'/new'} component={StoryFormContainer} />

        </Switch>

    </div>
)


export default App