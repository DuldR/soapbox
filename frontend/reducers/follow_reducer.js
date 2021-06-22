import { RECEIVE_FOLLOWS, RECEIVE_ONE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions'



const followReducer = (state = {"userFollows": {}, "storyFollows": {}}, action) => {
    Object.freeze(state);
    let nextState = {}

    switch(action.type) {
        case RECEIVE_FOLLOWS:
            return action.follows
        case RECEIVE_ONE_FOLLOW:

            if (Object.keys(action.follow).length === 0 ) {
                return state
            }
                
            

            if (action.follow.payload.followable_type === "Story") {
                return Object.assign({}, state, {"storyFollows": {[action.follow.payload.id] : action.follow.payload}})
            } else {
                return Object.assign({}, state, {"userFollows": {[action.follow.payload.id] : action.follow.payload}})
            }
        case REMOVE_FOLLOW:
            nextState = Object.assign({}, state)
            delete nextState[action.follow.id]
            return nextState

        default:
            return state;
    }
}

export default followReducer