import { RECEIVE_STORIES, RECEIVE_ONE_STORY } from './../actions/story_actions'


const storyReducer = (state = {}, action) => {
    Object.freeze(state);
    

    switch(action.type) {
        case RECEIVE_STORIES:
            return action.stories
        case RECEIVE_ONE_STORY:
            return Object.assign({}, state, {[action.story.payload.id]: action.story.payload})
        default:
            return state;
    }
}

export default storyReducer