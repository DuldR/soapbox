import { RECEIVE_TOPICS, RECEIVE_ONE_TOPIC, REMOVE_TOPIC } from "../actions/topic_actions";

const topicReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = {}

    switch(action.type) {
        case RECEIVE_TOPICS:
            return action.topics

        case RECEIVE_ONE_TOPIC:
            return Object.assign({}, state, {[action.topic.id]: action.topic})
        case REMOVE_TOPIC:
            nextState = Object.assign({}, state)
            delete nextState[action.topic.id]
            return nextState

        default:
            return state;
    }

}

export default topicReducer