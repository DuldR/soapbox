import * as APIUtil from '../util/user_util'


export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_ONE_USER = "RECEIVE_ONE_USER"


export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }

}

export const receiveOneUser = (user) => {
    return {
        type: RECEIVE_ONE_USER,
        user
    }
}

export const fetchUsers = () => (dispatch) => {
    return APIUtil.getUsers().then(users => {
        dispatch(receiveUsers(users))
    })
}