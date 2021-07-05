import { RECEIVE_TOPICS, RECEIVE_ONE_TOPICS } from "../actions/topic_actions";

const topicReducer = (state = {}, action) => {

    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_TOPICS:
            return action.topics
        default:
            return state;
    }

}

export default topicReducer