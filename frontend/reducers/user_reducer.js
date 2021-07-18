import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_USERS, RECEIVE_ONE_USER } from '../actions/user_actions'

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {}


    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { [action.payload.id] : action.payload }
        default:
            return state;
    }


}

export default userReducer