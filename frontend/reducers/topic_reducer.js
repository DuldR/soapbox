import { RECEIVE_TOPICS, RECEIVE_ONE_TOPIC } from "../actions/topic_actions";

const topicReducer = (state = {}, action) => {

    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_TOPICS:
            return action.topics

        case RECEIVE_ONE_TOPIC:
            return Object.assign({}, state, {[action.topic.id]: action.topic})
        default:
            return state;
    }

}

export default topicReducer