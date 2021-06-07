import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './components/root'
import configureStore from './store/store'

// Testing imports

// Ajax
// import * as sapi from '../frontend/util/session_util'
import * as uapi from '../frontend/util/user_util'
import * as sapi from '../frontend/util/story_util'
import * as capi from '../frontend/util/comment_util'

// Actions

import * as sessions from '../frontend/actions/session_actions'
import * as stories from '../frontend/actions/story_actions'
import * as comments from '../frontend/actions/comment_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")

    let store;
    if (window.currentUser) {
        const preloadedState = {
        entities: {
            user: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ReactDOM.render( <Root store={store}/>, root)

    window.store = store;
})

window.uapi = uapi
window.sapi = sapi
window.capi = capi
window.session = sessions
window.stories = stories
window.comments = comments

