import * as APIUtil from '../util/session_util'
import * as userAPIUtil from '../util/user_util'


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

import { fetchFollows } from '../actions/follow_actions'

export const receiveCurrentUser = (payload) => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload
    }
}

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const login = (user) => (dispatch) => {
    return APIUtil.createSession(user).then(user => {

        dispatch(receiveCurrentUser(user))
        // dispatch(fetchFollows(user.userInfo.id))
    })
}

export const signup = (user) => (dispatch) => {
    return userAPIUtil.createUser(user).then(user => {
        dispatch(receiveCurrentUser(user))
    })
}

export const logout = () => (dispatch) => (
    APIUtil.destroySession().then(() => {
        dispatch(logoutCurrentUser())
    })
)
