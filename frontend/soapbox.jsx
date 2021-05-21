import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './components/root'
import configureStore from './store/store'

// Testing imports

// Ajax
import * as api from '../frontend/util/session_util'

// Actions

import * as sessions from '../frontend/actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root")

    ReactDOM.render( <Root store={store}/>, root)

    window.store = store;
})

window.api = api
window.session = sessions

