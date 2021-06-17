import { RECEIVE_FOLLOWS, RECEIVE_ONE_FOLLOW } from '../actions/follow_actions'



const followReducer = (state = {"userFollows": {}, "storyFollows": {}, "lookupFollow": []}, action) => {
    Object.freeze(state);


    switch(action.type) {
        case RECEIVE_FOLLOWS:
            return action.follows
        case RECEIVE_ONE_FOLLOW:

            if (action.follow.followable_type === "Story") {
                return Object.assign({}, state, {"storyFollows": action.follow})
            } else {
                return Object.assign({}, state, {"userFollows": action.follow})
            }
        default:
            return state;
    }
}

export default followReducer