import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './components/root'
import configureStore from './store/store'

// Testing imports

// Ajax
// import * as sapi from '../frontend/util/session_util'
import * as uapi from '../frontend/util/user_util'
import * as sapi from '../frontend/util/story_util'

// Actions

import * as sessions from '../frontend/actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root")

    ReactDOM.render( <Root store={store}/>, root)

    window.store = store;
})

window.uapi = uapi
window.sapi = sapi
window.session = sessions

