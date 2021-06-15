import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {}


    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { [action.payload.userInfo.id] : action.payload.userInfo }
        default:
            return state;
    }


}

export default userReducer