import { RECEIVE_USERS, RECEIVE_ONE_USER } from '../actions/user_actions'

const userIndexReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = {}


    switch (action.type) {
        case RECEIVE_USERS:
            return action.users
        case RECEIVE_ONE_USER:
            return state;
        default:
            return state;
    }


}

export default userIndexReducer