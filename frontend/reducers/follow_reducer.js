import { RECEIVE_FOLLOWS, RECEIVE_ONE_FOLLOW } from '../actions/follow_actions'



const followReducer = (state = {}, action) => {
    Object.freeze(state);


    switch(action.type) {
        case RECEIVE_FOLLOWS:
            return action.follows
        case RECEIVE_ONE_FOLLOW:
            return Object.assign({}, state, {[action.follow.id]: action.follow } );
        default:
            return state;
    }
}

export default followReducer